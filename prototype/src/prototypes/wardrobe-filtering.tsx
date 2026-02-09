import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { ChevronDown, X } from "lucide-react";
import {
  categoryDefinitions,
  collectionDefinitions,
  collectionTitleById,
  dimensionDefinitions,
  wardrobeItems,
  type CategoryDefinition,
  type CategoryId,
  type CollectionId,
  type CollectionSelection,
  type FilterDimension,
  type ItemCategoryId,
  type WardrobeItem,
} from "./wardrobe-filtering.mock";
import styles from "./wardrobe-filtering.module.css";

type TabFilterState = {
  selectedType: string[];
  selectedColor: string[];
  selectedBrand: string[];
  activePanels: FilterDimension[];
};

type TabStateByCategory = Record<CategoryId, TabFilterState>;

function createEmptyTabState(): TabFilterState {
  return {
    selectedType: [],
    selectedColor: [],
    selectedBrand: [],
    activePanels: [],
  };
}

function createEmptyTabStateByCategory(): TabStateByCategory {
  return categoryDefinitions.reduce((state, category) => {
    state[category.id] = createEmptyTabState();
    return state;
  }, {} as TabStateByCategory);
}

function belongsToCollection(item: WardrobeItem, collectionId: CollectionSelection): boolean {
  if (!collectionId) {
    return true;
  }
  return item.collectionIds.includes(collectionId);
}

function getAvailableCategories(collectionId: CollectionSelection): CategoryDefinition[] {
  const nonEmptyCategorySet = new Set<ItemCategoryId>();
  for (const item of wardrobeItems) {
    if (belongsToCollection(item, collectionId)) {
      nonEmptyCategorySet.add(item.category);
    }
  }

  if (!nonEmptyCategorySet.size) {
    return [];
  }

  return categoryDefinitions.filter((category) => {
    if (category.id === "all") {
      return true;
    }
    return nonEmptyCategorySet.has(category.id);
  });
}

function toggleString(values: string[], value: string): string[] {
  if (values.includes(value)) {
    return values.filter((current) => current !== value);
  }
  return [...values, value];
}

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

function matchesSelected(values: string[], candidate: string): boolean {
  if (!values.length) {
    return true;
  }
  return values.includes(candidate);
}

function sortByNewest(items: WardrobeItem[]): WardrobeItem[] {
  return [...items].sort((left, right) => {
    return Date.parse(right.dateAdded) - Date.parse(left.dateAdded);
  });
}

function clearDimension(state: TabFilterState, dimension: FilterDimension): TabFilterState {
  switch (dimension) {
    case "type":
      return { ...state, selectedType: [] };
    case "color":
      return { ...state, selectedColor: [] };
    case "brand":
      return { ...state, selectedBrand: [] };
  }
}

function toggleDimensionValue(
  state: TabFilterState,
  dimension: FilterDimension,
  value: string,
): TabFilterState {
  switch (dimension) {
    case "type":
      return { ...state, selectedType: toggleString(state.selectedType, value) };
    case "color":
      return { ...state, selectedColor: toggleString(state.selectedColor, value) };
    case "brand":
      return { ...state, selectedBrand: toggleString(state.selectedBrand, value) };
  }
}

export function WardrobeFilteringPrototype() {
  const [isCollectionPanelOpen, setCollectionPanelOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<CollectionSelection>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [tabStateByCategory, setTabStateByCategory] = useState<TabStateByCategory>(() => {
    return createEmptyTabStateByCategory();
  });
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const availableCategories = useMemo(() => getAvailableCategories(selectedCollection), [selectedCollection]);

  useEffect(() => {
    if (!availableCategories.length) {
      return;
    }
    if (availableCategories.some((category) => category.id === activeCategory)) {
      return;
    }
    setActiveCategory(availableCategories[0].id);
  }, [availableCategories, activeCategory]);

  const activeTabState = tabStateByCategory[activeCategory] ?? createEmptyTabState();

  const contextItems = useMemo(() => {
    return wardrobeItems.filter((item) => {
      if (!belongsToCollection(item, selectedCollection)) {
        return false;
      }
      if (activeCategory === "all") {
        return true;
      }
      return item.category === activeCategory;
    });
  }, [selectedCollection, activeCategory]);

  const typeOptions = useMemo(() => uniqueSorted(contextItems.map((item) => item.type)), [contextItems]);
  const colorOptions = useMemo(
    () => uniqueSorted(contextItems.map((item) => item.color)),
    [contextItems],
  );
  const brandOptions = useMemo(
    () => uniqueSorted(contextItems.map((item) => item.brand)),
    [contextItems],
  );

  const filteredItems = useMemo(() => {
    const matches = contextItems.filter((item) => {
      return (
        matchesSelected(activeTabState.selectedType, item.type) &&
        matchesSelected(activeTabState.selectedColor, item.color) &&
        matchesSelected(activeTabState.selectedBrand, item.brand)
      );
    });
    return sortByNewest(matches);
  }, [
    contextItems,
    activeTabState.selectedType,
    activeTabState.selectedColor,
    activeTabState.selectedBrand,
  ]);

  const panelItems = [
    {
      definition: dimensionDefinitions[0],
      options: typeOptions,
      selected: activeTabState.selectedType,
    },
    {
      definition: dimensionDefinitions[1],
      options: colorOptions,
      selected: activeTabState.selectedColor,
    },
    {
      definition: dimensionDefinitions[2],
      options: brandOptions,
      selected: activeTabState.selectedBrand,
    },
  ];
  const activePanelSet = new Set(activeTabState.activePanels);
  const visiblePanelItems = panelItems.filter((panel) => panel.options.length > 1);
  const activePanels = visiblePanelItems.filter((panel) => activePanelSet.has(panel.definition.id));
  const inactivePanels = visiblePanelItems.filter((panel) => !activePanelSet.has(panel.definition.id));

  const updateActiveTabState = (updater: (state: TabFilterState) => TabFilterState): void => {
    setTabStateByCategory((current) => {
      return {
        ...current,
        [activeCategory]: updater(current[activeCategory] ?? createEmptyTabState()),
      };
    });
  };

  const applyCollectionContext = (collectionId: CollectionSelection): void => {
    setSelectedCollection(collectionId);
    setActiveCategory("all");
    setTabStateByCategory(createEmptyTabStateByCategory());
  };

  const handleCollectionPanelToggle = (): void => {
    setCollectionPanelOpen((current) => {
      const next = !current;
      if (!next) {
        applyCollectionContext(null);
      }
      return next;
    });
  };

  const handleCollectionSelect = (collectionId: CollectionId): void => {
    const nextCollection = selectedCollection === collectionId ? null : collectionId;
    applyCollectionContext(nextCollection);
  };

  const moveToAdjacentCategory = (direction: "previous" | "next"): void => {
    const currentIndex = availableCategories.findIndex((category) => category.id === activeCategory);
    if (currentIndex < 0) {
      return;
    }
    const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    const nextCategory = availableCategories[nextIndex];
    if (!nextCategory) {
      return;
    }
    setActiveCategory(nextCategory.id);
  };

  const handleDimensionToggle = (dimension: FilterDimension): void => {
    updateActiveTabState((state) => {
      const isActive = state.activePanels.includes(dimension);
      if (!isActive) {
        return {
          ...state,
          activePanels: [...state.activePanels, dimension],
        };
      }
      const withoutPanel = {
        ...state,
        activePanels: state.activePanels.filter((panel) => panel !== dimension),
      };
      return clearDimension(withoutPanel, dimension);
    });
  };

  const handleTagToggle = (dimension: FilterDimension, value: string): void => {
    updateActiveTabState((state) => toggleDimensionValue(state, dimension, value));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    const touch = event.changedTouches[0];
    if (!touch) {
      return;
    }
    swipeStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>): void => {
    const touch = event.changedTouches[0];
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    if (!touch || !start) {
      return;
    }
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    if (deltaX < 0) {
      moveToAdjacentCategory("next");
      return;
    }
    moveToAdjacentCategory("previous");
  };

  return (
    <div className={styles.root}>
      <div className={styles.phoneFrame}>
        <section className={styles.compactSection}>
          <div className={styles.collectionDisclosureRow}>
            <button
              aria-expanded={isCollectionPanelOpen}
              aria-label={isCollectionPanelOpen ? "Close collections" : "Open collections"}
              className={`${styles.collectionToggleButton} ${isCollectionPanelOpen ? styles.collectionToggleButtonOpen : ""}`}
              type="button"
              onClick={handleCollectionPanelToggle}
            >
              <span className={styles.collectionToggleLabel}>collections</span>
              <span className={styles.collectionToggleIcon} aria-hidden="true">
                {isCollectionPanelOpen ? <X /> : <ChevronDown />}
              </span>
            </button>
          </div>

          {isCollectionPanelOpen ? (
            <div className={styles.collectionRow}>
              {collectionDefinitions.map((collection) => {
                const isActive = collection.id === selectedCollection;
                return (
                  <button
                    className={`${styles.collectionButton} ${isActive ? styles.collectionButtonActive : ""}`}
                    key={collection.id}
                    type="button"
                    onClick={() => handleCollectionSelect(collection.id)}
                  >
                    {collection.title}
                  </button>
                );
              })}
            </div>
          ) : null}
        </section>

        <section className={styles.compactSection}>
          {availableCategories.length ? (
            <div className={styles.categoryRow}>
              {availableCategories.map((category) => {
                const isActive = category.id === activeCategory;
                const expandedWidth = Math.max(72, category.title.length * 9 + 36);
                const categoryStyle = {
                  "--category-expanded-width": `${expandedWidth}px`,
                } as CSSProperties;
                const CategoryIcon = category.Icon;
                return (
                  <button
                    className={`${styles.categoryButton} ${isActive ? styles.categoryButtonActive : styles.categoryButtonCollapsed}`}
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    aria-label={category.title}
                    style={categoryStyle}
                  >
                    <span className={styles.categoryIcon} aria-hidden="true">
                      <CategoryIcon />
                    </span>
                    {isActive ? <span className={styles.categoryLabel}>{category.title}</span> : null}
                  </button>
                );
              })}
            </div>
          ) : null}
        </section>

        <section
          className={styles.interactiveArea}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {inactivePanels.length ? (
            <div className={styles.dimensionRow}>
              {inactivePanels.map((panel) => {
                const DimensionIcon = panel.definition.Icon;
                return (
                  <button
                    className={styles.dimensionButton}
                    key={panel.definition.id}
                    type="button"
                    onClick={() => handleDimensionToggle(panel.definition.id)}
                    aria-label={`Open ${panel.definition.title} filter`}
                  >
                    <span className={styles.dimensionGlyph} aria-hidden="true">
                      <DimensionIcon />
                    </span>
                  </button>
                );
              })}
            </div>
          ) : null}

          {activePanels.length ? (
            <div className={styles.panelStack}>
              {activePanels.map((panel) => {
                const DimensionIcon = panel.definition.Icon;
                return (
                  <article className={styles.panelCard} key={panel.definition.id}>
                    <button
                      className={`${styles.dimensionButton} ${styles.panelCloseButton}`}
                      type="button"
                      onClick={() => handleDimensionToggle(panel.definition.id)}
                      aria-label={`Close ${panel.definition.title} filter`}
                    >
                      <span className={styles.closeGlyphFrom} aria-hidden="true">
                        <DimensionIcon />
                      </span>
                      <span className={styles.closeGlyphTo} aria-hidden="true">
                        <X />
                      </span>
                    </button>
                    <div className={styles.tagGrid}>
                      {panel.options.map((option) => {
                        const isSelected = panel.selected.includes(option);
                        return (
                          <button
                            className={`${styles.tagButton} ${isSelected ? styles.tagButtonActive : ""}`}
                            key={option}
                            type="button"
                            onClick={() => handleTagToggle(panel.definition.id, option)}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : null}

          <div className={styles.resultList}>
            {filteredItems.length ? (
              filteredItems.map((item) => (
                <article className={styles.itemCard} key={item.id}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemMeta}>
                    {item.type} | {item.color} | {item.brand}
                  </p>
                  <p className={styles.itemCollections}>
                    Collections: {item.collectionIds.map((id) => collectionTitleById[id]).join(", ")}
                  </p>
                </article>
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>No matching items in this tab. Clear one of the active filters.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

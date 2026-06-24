// Batch Auto Layout Plugin for Figma
// Apply auto-layout settings to multiple selected frames at once

figma.showUI(__html__, {
  width: 320,
  height: 440,
  themeColors: true,
});

interface AutoLayoutSettings {
  direction: "HORIZONTAL" | "VERTICAL";
  gap: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  horizontalAlign: "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";
  verticalAlign: "MIN" | "CENTER" | "MAX";
  layoutWrap?: "NO_WRAP" | "WRAP";
}

function getChildren(node: SceneNode): SceneNode[] {
  if ("children" in node) {
    return (node as FrameNode | GroupNode).children as unknown as SceneNode[];
  }
  return [];
}

figma.ui.onmessage = (msg: { type: string; settings?: AutoLayoutSettings }) => {
  const selection = figma.currentPage.selection;

  if (msg.type === "get-selection-info") {
    const frames = selection.filter(
      (n) => n.type === "FRAME" || n.type === "COMPONENT" || n.type === "INSTANCE"
    );
    const hasAutoLayout = frames.filter(
      (f) => "layoutMode" in f && (f as FrameNode).layoutMode !== "NONE"
    ).length;

    figma.ui.postMessage({
      type: "selection-info",
      total: selection.length,
      frames: frames.length,
      autoLayoutCount: hasAutoLayout,
    });
    return;
  }

  if (msg.type === "apply-autolayout" && msg.settings) {
    const { settings } = msg;
    const targetNodes = selection.filter(
      (n) => n.type === "FRAME" || n.type === "COMPONENT" || n.type === "INSTANCE"
    );

    if (targetNodes.length === 0) {
      figma.notify("No frames selected. Select at least one frame.", { error: true });
      return;
    }

    let applied = 0;
    for (const node of targetNodes) {
      const frame = node as FrameNode;
      frame.layoutMode = settings.direction;

      if (settings.direction === "HORIZONTAL") {
        frame.primaryAxisSizingMode = "AUTO";
        frame.counterAxisSizingMode = "AUTO";
      } else {
        frame.primaryAxisSizingMode = "AUTO";
        frame.counterAxisSizingMode = "AUTO";
      }

      frame.itemSpacing = settings.gap;
      frame.paddingTop = settings.paddingTop;
      frame.paddingRight = settings.paddingRight;
      frame.paddingBottom = settings.paddingBottom;
      frame.paddingLeft = settings.paddingLeft;
      frame.primaryAxisAlignItems = settings.horizontalAlign;
      frame.counterAxisAlignItems = settings.verticalAlign;

      if (settings.layoutWrap) {
        frame.layoutWrap = settings.layoutWrap;
      }

      applied++;
    }

    figma.notify(`Auto layout applied to ${applied} frame(s) ✓`);
    figma.closePlugin();
  }

  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
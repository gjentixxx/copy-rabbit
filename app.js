const stateKey = "copy-rabbit.minimal.canvas.v13";

const demoZoom = 0.58;
const emptyZoom = 0.92;

const initialState = {
  captureOn: false,
  activeSpaceId: "demo",
  zoom: demoZoom,
  panX: null,
  panY: null,
  spaces: [
    { id: "demo", name: "Demo canvas", color: "#87951a" }
  ],
  captures: [
    { id: "cap-web-link", type: "link", kind: "web-link", title: "Web Link", content: "https://www.lipsum.com/", footer: "Copied 3s ago", actions: ["open", "duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["link"], x: 0, y: 0, w: 398 },
    { id: "cap-image-link", type: "image", kind: "image-link", title: "Image Link", content: "https://www.pexels.com/photo/misty-mountains-417173/", previewUrl: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=900", footer: "Copied 3s ago", actions: ["open", "duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["image", "link"], x: 430, y: 0, w: 398 },
    { id: "cap-video-link", type: "video", kind: "video-link", title: "Video Link", content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", footer: "Copied 3s ago", actions: ["open", "duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["video", "link"], x: 860, y: 0, w: 398 },
    { id: "cap-image", type: "image", kind: "image", title: "Image", content: "dropped-image.png", previewUrl: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80", footer: "Dropped 3s ago", actions: ["download", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["image"], x: 430, y: 560, w: 398 },
    { id: "cap-video", type: "video", kind: "video", title: "Video", content: "dropped-video.mp4", previewUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", footer: "Dropped 3s ago", actions: ["download", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["video"], x: 0, y: 560, w: 398 },
    { id: "cap-screenshot", type: "image", kind: "screenshot", title: "Screenshot", content: "screenshot.png", previewUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg", footer: "Captured 3s ago", actions: ["download", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["screenshot"], x: 860, y: 560, w: 398 },
    { id: "cap-code", type: "code", kind: "code", title: "Code", content: "const person = {\n  fullName: function() {\n    return this.firstName + \" \" + this.lastName;\n  }\n};", footer: "Copied 3s ago", actions: ["duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["code"], x: 0, y: 980, w: 398 },
    { id: "cap-css", type: "code", kind: "css", title: "CSS", content: "body {\n  background-color: lightblue;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}", footer: "Copied 3s ago", actions: ["duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["code", "css"], x: 430, y: 980, w: 398 },
    { id: "cap-html", type: "code", kind: "html-code", title: "HTML", content: "<!doctype html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>My wonderful website</title>\n</head>\n<body>\n  <h1>Hello HTML</h1>\n</body>\n</html>", footer: "Copied 3s ago", actions: ["duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["code", "html"], x: 860, y: 980, w: 398 },
    { id: "cap-file", type: "file", kind: "file", title: "File", content: "file.pdf", fileName: "file.pdf", fileType: "application/pdf", footer: "Dropped 3s ago", actions: ["download", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["file"], x: 0, y: 1320, w: 398 },
    { id: "cap-multiple-files", type: "file", kind: "multiple-files", title: "Multiple Files", content: "file.pdf\nfile.px\nfile.exl", fileNames: ["file.pdf", "file.px", "file.exl"], footer: "Dropped 3s ago", actions: ["download", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["file"], x: 430, y: 1320, w: 398 },
    { id: "cap-text", type: "note", kind: "text", title: "Text", content: "Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London", footer: "Copied 3s ago", actions: ["duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["text"], x: 860, y: 1320, w: 398 },
    { id: "cap-long-text", type: "note", kind: "long-text", title: "Long Text", content: "Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London. It stays readable with clean truncation when the card becomes too full.", footer: "Copied 3s ago", actions: ["duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["text"], x: 0, y: 1640, w: 398 },
    { id: "cap-quote", type: "quote", kind: "quote", title: "Quote", content: "Lorem Ipsum has been the industry's standard dummy text ever since 1966,", footer: "Copied 3s ago", actions: ["duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["quote"], x: 430, y: 1640, w: 398 },
    { id: "cap-prompt", type: "prompt", kind: "prompt", title: "Prompt", content: "Build a web-based product called Clipspace, an automatic visual clipboard workspace that turns everything a user copies into visual, organized cards inside an infinite canvas. The product should feel like a fast visual memory system for everything copied across the internet, browser tabs, documents, design tools, apps, research sessions, and daily work.", footer: "Copied 3s ago", actions: ["duplicate", "delete"], timestamp: new Date(Date.now() - 3000).toISOString(), spaceId: "demo", tags: ["prompt"], x: 860, y: 1640, w: 398 }
  ]
};

let state = loadState();
let dragState = null;
let panState = null;
let frameRequested = false;

const el = {
  spacePicker: document.querySelector("#spacePicker"),
  spaceTrigger: document.querySelector("#spaceTrigger"),
  activeSpaceName: document.querySelector("#activeSpaceName"),
  spaceMenu: document.querySelector("#spaceMenu"),
  newSpaceBtn: document.querySelector("#newSpaceBtn"),
  canvasShell: document.querySelector("#canvasShell"),
  canvasStage: document.querySelector("#canvasStage")
};

function loadState() {
  try {
    if (new URLSearchParams(window.location.search).has("fresh")) {
      localStorage.removeItem(stateKey);
    }
    const saved = localStorage.getItem(stateKey);
    return normalizeState(saved ? JSON.parse(saved) : structuredClone(initialState));
  } catch {
    return normalizeState(structuredClone(initialState));
  }
}

function normalizeState(nextState) {
  nextState.captures = nextState.captures.map((capture) => {
    if (capture.type !== "table" && capture.type !== "code") return capture;
    if (capture.type === "table" && isStructuredTable(capture.content)) return capture;
    if (capture.type === "code" && isLikelyCode(capture.content) && !isPromptText(capture.content)) return capture;
    const detection = detectContent(capture.content);
    return {
      ...capture,
      type: detection.type === "table" || detection.type === "code" ? "note" : detection.type,
      title: detection.type === "table" || detection.type === "code" ? "Text paragraph" : defaultTitle(detection),
      tags: detection.type === "table" || detection.type === "code" ? ["text"] : detection.tags,
      w: Math.max(capture.w || 398, 420)
    };
  });
  return nextState;
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function activeSpace() {
  return state.spaces.find((space) => space.id === state.activeSpaceId) || state.spaces[0];
}

function capturesForActiveSpace() {
  return state.captures.filter((capture) => capture.spaceId === state.activeSpaceId);
}

function initializeViewport() {
  if (typeof state.panX === "number" && typeof state.panY === "number") return;
  const bounds = boardBounds(capturesForActiveSpace());
  state.zoom = defaultZoomForSpace(state.activeSpaceId);
  state.panX = Math.round(window.innerWidth / 2 - (bounds.x + bounds.width / 2) * state.zoom);
  state.panY = Math.round(window.innerHeight / 2 - (bounds.y + bounds.height / 2) * state.zoom);
}

function defaultZoomForSpace(spaceId) {
  return state.captures.some((capture) => capture.spaceId === spaceId) ? demoZoom : emptyZoom;
}

function boardBounds(captures) {
  if (!captures.length) return { x: 0, y: 0, width: 420, height: 300 };
  const left = Math.min(...captures.map((capture) => capture.x));
  const top = Math.min(...captures.map((capture) => capture.y));
  const right = Math.max(...captures.map((capture) => capture.x + (capture.w || 398)));
  const bottom = Math.max(...captures.map((capture) => capture.y + estimatedHeight(capture)));
  return { x: left, y: top, width: right - left, height: bottom - top };
}

function estimatedHeight(capture) {
  if (capture.kind === "image-link") return 660;
  if (capture.kind === "image" || capture.kind === "video" || capture.kind === "screenshot" || capture.kind === "video-link") return 360;
  if (capture.kind === "multiple-files") return 330;
  if (capture.kind === "long-text" || capture.kind === "prompt") return 380;
  if (capture.type === "color") return 230;
  if (capture.type === "link") return 224;
  if (capture.type === "video") return 250;
  if (capture.type === "embed" || capture.type === "html") return 360;
  return 302;
}

function render() {
  initializeViewport();
  renderSpaces();
  renderCanvas();
  saveState();
}

function renderSpaces() {
  const active = activeSpace();
  el.activeSpaceName.textContent = active.name;
  el.spaceMenu.innerHTML = state.spaces.map((space) => `
    <div class="space-row ${space.id === state.activeSpaceId ? "is-active" : ""}" data-space-row="${space.id}" role="menuitem">
      <button class="space-check" data-space-activate="${space.id}" title="Open ${escapeHtml(space.name)}">${space.id === state.activeSpaceId ? "✓" : ""}</button>
      <input class="space-name-input" data-space-name="${space.id}" value="${escapeHtml(space.name)}" aria-label="Rename ${escapeHtml(space.name)}" />
      <button class="space-delete" data-space-delete="${space.id}" title="Delete ${escapeHtml(space.name)}">x</button>
    </div>
  `).join("");

  [...el.spaceMenu.querySelectorAll("[data-space-activate]")].forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectSpace(button.dataset.spaceActivate);
    });
  });
  [...el.spaceMenu.querySelectorAll("[data-space-row]")].forEach((row) => {
    row.addEventListener("click", (event) => {
      if (event.target.closest("[data-space-delete]")) return;
      if (event.target.matches("[data-space-name]") && row.dataset.spaceRow === state.activeSpaceId) return;
      event.preventDefault();
      selectSpace(row.dataset.spaceRow);
    });
  });
  [...el.spaceMenu.querySelectorAll("[data-space-name]")].forEach((input) => {
    input.addEventListener("click", (event) => {
      if (input.dataset.spaceName === state.activeSpaceId) return;
      event.preventDefault();
      selectSpace(input.dataset.spaceName);
    });
    input.addEventListener("input", () => renameSpace(input.dataset.spaceName, input.value));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        input.blur();
        closeSpaceMenu();
      }
    });
  });
  [...el.spaceMenu.querySelectorAll("[data-space-delete]")].forEach((button) => {
    button.addEventListener("click", () => deleteSpace(button.dataset.spaceDelete));
  });
}

function renderCanvas() {
  const captures = capturesForActiveSpace();
  el.canvasStage.innerHTML = captures.length ? captures.map(cardHtml).join("") : emptyCanvasHtml();
  applyViewport();

  [...el.canvasStage.querySelectorAll(".capture-card")].forEach((card) => {
    card.addEventListener("pointerdown", startDrag);
    card.querySelector("[data-title]").addEventListener("input", updateTitle);
    card.querySelector("[data-title]").addEventListener("keydown", titleKeydown);
    card.querySelectorAll("[data-delete]").forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteCapture(card.dataset.id);
    }));
    card.querySelectorAll("[data-duplicate]").forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      duplicateCapture(card.dataset.id);
    }));
    card.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      openCapture(card.dataset.id);
    }));
    card.querySelectorAll("[data-download]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        downloadCaptureFile(card.dataset.id);
      });
    });
    card.querySelectorAll("[data-play]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        playVideo(button);
      });
    });
    card.querySelector(".resize-handle").addEventListener("pointerdown", startResize);
  });
}

function applyViewport() {
  el.canvasStage.style.transform = `translate3d(${state.panX}px, ${state.panY}px, 0) scale(${state.zoom})`;
  el.canvasShell.style.setProperty("--grid-x", `${state.panX % 55}px`);
  el.canvasShell.style.setProperty("--grid-y", `${state.panY % 55}px`);
}

function scheduleViewport() {
  if (frameRequested) return;
  frameRequested = true;
  requestAnimationFrame(() => {
    frameRequested = false;
    applyViewport();
  });
}

function cardHtml(capture) {
  const actions = capture.actions || defaultActions(capture);
  return `
    <article class="capture-card" data-id="${capture.id}" data-type="${capture.type}" style="left:${capture.x}px;top:${capture.y}px;width:${capture.w || 398}px">
      <span class="card-label" contenteditable="true" spellcheck="false" data-title="${capture.id}">${escapeHtml(displayTitle(capture.title))}</span>
      <div class="card-divider"></div>
      ${cardInnerHtml(capture)}
      <div class="card-footer">
        <span class="time-chip">${escapeHtml(footerText(capture))}</span>
        <div class="card-actions">
          ${actions.map(actionButtonHtml).join("")}
        </div>
      </div>
      <span class="resize-handle" title="Resize"></span>
    </article>
  `;
}

function defaultActions(capture) {
  if (capture.type === "file") return ["download", "delete"];
  if (capture.kind === "image" || capture.kind === "video" || capture.kind === "screenshot") return ["download", "delete"];
  if (capture.type === "link" || capture.kind === "image-link" || capture.kind === "video-link") return ["open", "duplicate", "delete"];
  return ["duplicate", "delete"];
}

function actionButtonHtml(action) {
  const titles = {
    open: "Open source",
    duplicate: "Duplicate card",
    download: "Download",
    delete: "Delete"
  };
  const data = {
    open: "data-open",
    duplicate: "data-duplicate",
    download: "data-download",
    delete: "data-delete"
  };
  const icon = action === "duplicate" ? "copy" : action === "delete" ? "trash" : action;
  return `<button class="icon-btn" title="${titles[action]}" ${data[action]}>${iconSvg(icon)}</button>`;
}

function footerText(capture) {
  return capture.footer || relativeTime(capture.timestamp);
}

function cardInnerHtml(capture) {
  const kind = capture.kind || capture.type;
  if (kind === "image-link") {
    const preview = imagePreviewStyle(capture);
    return `
      <div class="image-preview" aria-label="Image preview" ${preview}></div>
      <div class="source-row">
        <span class="source-icon">${iconSvg("globe")}</span>
        <span>${escapeHtml(shortUrl(capture.content))}</span>
      </div>
    `;
  }
  if (kind === "image" || kind === "screenshot") {
    return `<div class="image-preview image-preview-short" aria-label="${escapeHtml(capture.title)} preview" ${imagePreviewStyle(capture)}></div>`;
  }
  if (kind === "video") {
    return `<div class="card-inner video-preview" ${videoPreviewStyle(capture)}></div>`;
  }
  if (capture.type === "color") {
    return `
      <div class="card-inner">
        <div class="color-preview">${extractColors(capture.content).map((color) => `<span style="background:${color}"></span>`).join("")}</div>
      </div>
    `;
  }
  if (capture.type === "table") {
    const rows = capture.content.split("\n").slice(0, 4);
    return `
      <div class="card-inner">
        <div class="table-preview">${rows.map((row) => `<span>${escapeHtml(row)}</span>`).join("")}</div>
      </div>
    `;
  }
  if (kind === "video-link") {
    const thumb = videoThumbnailUrl(capture.content);
    return `
      <div class="card-inner video-preview" ${thumb ? `style="background-image:url('${escapeAttribute(thumb)}')"` : ""}>
        <div class="video-badge">${escapeHtml(capture.sourceTitle || "Video")}</div>
        <button class="video-play" data-play="${escapeAttribute(videoEmbedUrl(capture.content))}" onclick="playVideo(this)" title="Play video">▶</button>
      </div>
      <div class="source-row">
        <span class="source-icon">${iconSvg("globe")}</span>
        <span>${escapeHtml(shortUrl(capture.content))}</span>
      </div>
    `;
  }
  if (capture.type === "embed" || capture.type === "html") {
    const embedUrl = capture.type === "embed" ? embedUrlFromHtml(capture.content) : "";
    const thumb = embedUrl ? videoThumbnailUrl(embedUrl) : "";
    if (thumb) {
      return `
        <div class="card-inner video-preview" style="background-image:url('${escapeAttribute(thumb)}')">
          <div class="video-badge">Embed</div>
          <button class="video-play" data-play="${escapeAttribute(embedUrl)}" onclick="playVideo(this)" title="Play embed">▶</button>
        </div>
        <div class="source-row">
          <span class="source-icon">${iconSvg("code")}</span>
          <span>${escapeHtml(trimContent(capture.content.replace(/\s+/g, " "), 80))}</span>
        </div>
      `;
    }
    return `
      <div class="card-inner web-preview">
        <iframe title="${escapeHtml(capture.title)} preview" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" srcdoc="${escapeSrcdoc(renderableHtml(capture))}"></iframe>
      </div>
      <div class="source-row">
        <span class="source-icon">${iconSvg("code")}</span>
        <span>${escapeHtml(trimContent(capture.content.replace(/\s+/g, " "), 80))}</span>
      </div>
    `;
  }
  if (capture.type === "link") {
    return `
      <div class="source-row link-row">
        <span class="source-icon">${iconSvg("globe")}</span>
        <span>${escapeHtml(shortUrl(capture.content))}</span>
      </div>
    `;
  }
  if (capture.type === "file") {
    if (kind === "multiple-files") {
      return `
        <div class="file-stack">
          ${(capture.fileNames || [capture.content]).map((name) => fileRowHtml(name)).join("")}
        </div>
      `;
    }
    return `
      ${fileRowHtml(capture.fileName || capture.content)}
    `;
  }
  if (capture.type === "quote") {
    return `
      <div class="quote-body">“${escapeHtml(capture.content)}”</div>
    `;
  }
  const body = capture.type === "code"
    ? `<pre>${escapeHtml(trimContent(capture.content, kind === "css" || kind === "html-code" ? 150 : 130))}</pre>`
    : `<p>${escapeHtml(trimContent(capture.content, kind === "long-text" || kind === "prompt" ? 285 : 180))}</p>`;
  return `
    <div class="card-inner">
      <div class="card-body">${body}</div>
    </div>
  `;
}

function fileRowHtml(name) {
  return `
    <div class="source-row file-row">
      <span class="source-icon">${iconSvg("file")}</span>
      <span>${escapeHtml(name)}</span>
    </div>
  `;
}

function captureContent(raw, options = {}) {
  const content = raw.trim();
  if (!content) return;
  const detection = detectContent(content);
  const position = nextPosition();
  state.captures.push({
    id: `cap-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: detection.type,
    title: options.title || defaultTitle(detection),
    content,
    sourceTitle: options.sourceTitle || detection.sourceTitle,
    sourceDomain: options.sourceDomain || detection.sourceDomain,
    sourceApp: options.sourceApp || "Clipboard",
    method: options.method || "Manual Paste",
    timestamp: new Date().toISOString(),
    spaceId: state.activeSpaceId,
    tags: detection.tags,
    x: options.x ?? position.x,
    y: options.y ?? position.y,
    w: detection.type === "embed" || detection.type === "html" ? 460 : detection.type === "image" ? 398 : detection.type === "link" ? 360 : detection.type === "prompt" || detection.type === "note" ? 420 : 398,
    previewUrl: options.previewUrl || imagePreviewUrlFromContent(content)
  });
  render();
}

function detectContent(content) {
  const url = content.match(/^https?:\/\/[^\s]+$/i);
  const colors = extractColors(content);
  const looksLikeTable = isStructuredTable(content);
  const looksLikePrompt = isPromptText(content);
  const looksLikeCode = isLikelyCode(content);
  const looksLikeEmbed = /<iframe[\s>]/i.test(content);
  const looksLikeHtmlPage = /<!doctype html|<html[\s>]/i.test(content);
  const looksLikeHtmlFragment = /<style[\s>]|<script[\s>]|<body[\s>]|<main[\s>]|<section[\s>]/i.test(content);
  const looksLikeFile = /\.(pdf|docx?|xlsx?|pptx?|zip|fig|sketch|psd|ai)$/i.test(content);
  const looksLikeQuote = /^["“].+["”]$/.test(content) || content.length < 120 && /quote|clipboard|organize|remember/i.test(content);

  if (looksLikeEmbed) return { type: "embed", sourceTitle: "Embed code", sourceDomain: "local", tags: ["embed"] };
  if (looksLikeHtmlPage || looksLikeHtmlFragment) return { type: "html", sourceTitle: "index.html", sourceDomain: "local", tags: ["html"] };
  if (looksLikeFile) return { type: "file", sourceTitle: "File", sourceDomain: "local", tags: ["file"] };

  if (url) {
    const domain = safeDomain(content);
    const directImage = isDirectImageUrl(content);
    const pexelsPhoto = /(^|\.)pexels\.com$/i.test(domain) && /\/photo\//i.test(content);
    const video = /(youtube|youtu\.be|tiktok|vimeo|instagram|reels)/i.test(domain) || /\/video\//i.test(content);
    const image = !video && (directImage || pexelsPhoto || /(unsplash|images)/i.test(domain));
    return {
      type: image ? "image" : video ? "video" : "link",
      sourceTitle: readableDomain(domain),
      sourceDomain: domain,
      tags: [image ? "image" : video ? "video" : "link"]
    };
  }
  if (looksLikePrompt) return { type: "prompt", sourceTitle: "Clipboard", sourceDomain: "unknown", tags: ["prompt"] };
  if (colors.length) return { type: "color", sourceTitle: "Clipboard", sourceDomain: "unknown", tags: ["color"] };
  if (looksLikeTable) return { type: "table", sourceTitle: "Clipboard", sourceDomain: "unknown", tags: ["table"] };
  if (looksLikeCode) return { type: "code", sourceTitle: "Clipboard", sourceDomain: "unknown", tags: ["code"] };
  if (looksLikeQuote) return { type: "quote", sourceTitle: "Clipboard", sourceDomain: "unknown", tags: ["quote"] };
  return { type: "note", sourceTitle: "Clipboard", sourceDomain: "unknown", tags: ["text"] };
}

function isPromptText(content) {
  const text = content.trim();
  if (/^(create|write|generate|act as|summarize|draft|analyze|design|build|make|compose|produce)\b/i.test(text)) return true;
  const promptSignals = [
    /\b(full descriptive prompt|paste into|AI builder|wonder)\b/i,
    /\bdesign (a|an|the|this|following)\b/i,
    /\bcreate (a|an|the|this|following)\b/i,
    /\bthe final design should\b/i,
    /\bsuggested visual direction\b/i,
    /\binclude thoughtful details\b/i,
    /\bkey screens and flows\b/i,
    /\buse a premium UI style\b/i
  ];
  return text.length > 180 && promptSignals.some((pattern) => pattern.test(text));
}

function isLikelyCode(content) {
  if (/```[\s\S]*```/.test(content)) return true;
  if (/<\/?(script|style|html|body|main|section|div|iframe|canvas|svg)[\s>]/i.test(content)) return true;
  if (/\b(function|class|const|let|var|import|export|return|async|await)\b[\s\S]*[{};=()]/.test(content)) return true;
  if (/^\s*(SELECT|INSERT|UPDATE|DELETE)\s+[\s\S]+\s+(FROM|SET|WHERE)\b/i.test(content)) return true;
  if (/^\s*(def|class)\s+\w+\s*[:(]/m.test(content)) return true;

  const codeLineCount = content
    .split(/\r?\n/)
    .filter((line) => /^\s*(if|for|while|switch|try|catch|return)\b.*[({:;]/.test(line) || /[{};]\s*$/.test(line))
    .length;
  return codeLineCount >= 2;
}

function isStructuredTable(content) {
  const rows = content
    .split(/\r?\n/)
    .map((row) => row.trim())
    .filter(Boolean);

  if (rows.length < 2 || rows.length > 80) return false;

  const delimiter = rows.some((row) => row.includes("\t")) ? "\t" : ",";
  if (!rows.every((row) => row.includes(delimiter))) return false;

  const columns = rows.map((row) => row.split(delimiter).map((cell) => cell.trim()));
  const columnCount = columns[0].length;
  if (columnCount < 2 || columnCount > 8) return false;
  if (!columns.every((row) => row.length === columnCount)) return false;

  const averageCellLength = columns.flat().reduce((total, cell) => total + cell.length, 0) / columns.flat().length;
  const tooManySentenceCells = columns.flat().filter((cell) => /[.!?]\s|[.!?]$/.test(cell) || cell.length > 44).length;
  return averageCellLength <= 32 && tooManySentenceCells <= Math.max(1, columns.flat().length * 0.2);
}

function defaultTitle(detection) {
  if (detection.type === "link") return "Web link";
  if (detection.type === "video") return "Video link";
  if (detection.type === "image") return "Image";
  if (detection.type === "code") return "Code snippet";
  if (detection.type === "color") return "Color palette";
  if (detection.type === "table") return "Table";
  if (detection.type === "prompt") return "AI prompt";
  if (detection.type === "embed") return "Embed";
  if (detection.type === "html") return "HTML preview";
  if (detection.type === "file") return "File";
  if (detection.type === "quote") return "Quote";
  return "Untitled";
}

function displayTitle(title) {
  const value = String(title || "Untitled").trim();
  return value.toUpperCase() === value ? sentenceCase(value) : value;
}

function sentenceCase(value) {
  const lower = value.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function nextPosition() {
  const existing = capturesForActiveSpace();
  const index = existing.length;
  return {
    x: (index % 3) * 421,
    y: Math.floor(index / 3) * 327
  };
}

function emptyCanvasHtml() {
  return `
    <div class="empty-canvas">
      <div class="empty-orbit" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <strong>Start capturing into this canvas</strong>
      <p>Paste anywhere, or drop a file here. New items will appear as clean visual cards.</p>
    </div>
  `;
}

function updateTitle(event) {
  const capture = state.captures.find((item) => item.id === event.currentTarget.dataset.title);
  if (!capture) return;
  capture.title = event.currentTarget.textContent.trim() || "Untitled";
  saveState();
}

function titleKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    event.currentTarget.blur();
  }
}

function startDrag(event) {
  if (event.target.closest("button, select, .resize-handle, [contenteditable]")) return;
  const card = event.currentTarget;
  const capture = state.captures.find((item) => item.id === card.dataset.id);
  dragState = {
    mode: "drag",
    id: capture.id,
    startX: event.clientX,
    startY: event.clientY,
    x: capture.x,
    y: capture.y
  };
  card.classList.add("is-dragging");
  card.setPointerCapture(event.pointerId);
}

function startResize(event) {
  event.stopPropagation();
  const card = event.currentTarget.closest(".capture-card");
  const capture = state.captures.find((item) => item.id === card.dataset.id);
  dragState = {
    mode: "resize",
    id: capture.id,
    startX: event.clientX,
    width: capture.w || 398
  };
  card.setPointerCapture(event.pointerId);
}

function startPan(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest(".capture-card, .floating-bar")) return;
  panState = {
    startX: event.clientX,
    startY: event.clientY,
    panX: state.panX,
    panY: state.panY
  };
  el.canvasShell.classList.add("is-panning");
  if (event.pointerId !== undefined) el.canvasShell.setPointerCapture(event.pointerId);
}

function moveCanvas(event) {
  if (dragState) {
    const capture = state.captures.find((item) => item.id === dragState.id);
    if (!capture) return;
    if (dragState.mode === "drag") {
      capture.x = dragState.x + (event.clientX - dragState.startX) / state.zoom;
      capture.y = dragState.y + (event.clientY - dragState.startY) / state.zoom;
    } else {
      capture.w = Math.max(280, Math.min(560, dragState.width + (event.clientX - dragState.startX) / state.zoom));
    }
    const card = el.canvasStage.querySelector(`[data-id="${dragState.id}"]`);
    if (card) {
      card.style.left = `${capture.x}px`;
      card.style.top = `${capture.y}px`;
      card.style.width = `${capture.w}px`;
    }
  }

  if (panState) {
    state.panX = panState.panX + event.clientX - panState.startX;
    state.panY = panState.panY + event.clientY - panState.startY;
    scheduleViewport();
  }
}

function endCanvasMove() {
  if (dragState) {
    const card = el.canvasStage.querySelector(`[data-id="${dragState.id}"]`);
    if (card) card.classList.remove("is-dragging");
    dragState = null;
    saveState();
  }
  if (panState) {
    panState = null;
    el.canvasShell.classList.remove("is-panning");
    saveState();
  }
}

function zoomAt(clientX, clientY, factor) {
  const oldZoom = state.zoom;
  const nextZoom = clamp(oldZoom * factor, 0.28, 2.4);
  if (nextZoom === oldZoom) return;

  const worldX = (clientX - state.panX) / oldZoom;
  const worldY = (clientY - state.panY) / oldZoom;
  state.zoom = nextZoom;
  state.panX = clientX - worldX * nextZoom;
  state.panY = clientY - worldY * nextZoom;
  scheduleViewport();
}

function viewportToWorld(clientX, clientY) {
  return {
    x: (clientX - state.panX) / state.zoom,
    y: (clientY - state.panY) / state.zoom
  };
}

function captureAtViewport(content, clientX = window.innerWidth / 2, clientY = window.innerHeight / 2, options = {}) {
  const point = viewportToWorld(clientX, clientY);
  captureContent(content, {
    ...options,
    x: point.x - 190,
    y: point.y - 120
  });
}

function captureImageFile(file, clientX = window.innerWidth / 2, clientY = window.innerHeight / 2) {
  const point = viewportToWorld(clientX, clientY);
  state.captures.push({
    id: `cap-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: "image",
    title: file.name ? cleanFileTitle(file.name) : "Image",
    content: file.name || "Dropped image",
    sourceTitle: "Dropped image",
    sourceDomain: "local",
    sourceApp: "Canvas",
    method: "Drag and Drop",
    timestamp: new Date().toISOString(),
    spaceId: state.activeSpaceId,
    tags: ["image"],
    x: point.x - 190,
    y: point.y - 250,
    w: 398,
    previewUrl: URL.createObjectURL(file)
  });
  render();
}

function captureGenericFile(file, clientX = window.innerWidth / 2, clientY = window.innerHeight / 2) {
  const point = viewportToWorld(clientX, clientY);
  state.captures.push({
    id: `cap-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: "file",
    title: "File",
    content: file.name || "Dropped file",
    fileName: file.name || "download",
    fileType: file.type || "application/octet-stream",
    downloadUrl: URL.createObjectURL(file),
    sourceTitle: "Dropped file",
    sourceDomain: "local",
    sourceApp: "Canvas",
    method: "Drag and Drop",
    timestamp: new Date().toISOString(),
    spaceId: state.activeSpaceId,
    tags: ["file"],
    x: point.x - 180,
    y: point.y - 110,
    w: 360
  });
  render();
}

function cleanFileTitle(name) {
  return name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim() || "Image";
}

function renderableHtml(capture) {
  if (capture.type === "html") return capture.content;
  return `<!doctype html>
    <html>
      <head>
        <style>
          html,body{height:100%;margin:0;background:#fbfbf8;display:grid;place-items:center;overflow:hidden}
          iframe{width:100%;height:100%;border:0}
        </style>
      </head>
      <body>${capture.content}</body>
    </html>`;
}

function imagePreviewStyle(capture) {
  const url = capture.previewUrl || imagePreviewUrlFromContent(capture.content);
  return url ? `style="background-image:url('${escapeAttribute(url)}')"` : "";
}

function videoPreviewStyle(capture) {
  const url = capture.previewUrl || videoThumbnailUrl(capture.content);
  return url ? `style="background-image:url('${escapeAttribute(url)}')"` : "";
}

function imagePreviewUrlFromContent(content) {
  if (isDirectImageUrl(content)) return content;
  return pexelsPhotoImageUrl(content) || "";
}

function isDirectImageUrl(content) {
  return /^https?:\/\/.+\.(png|jpe?g|gif|webp|avif)(\?.*)?$/i.test(content);
}

function pexelsPhotoImageUrl(content) {
  if (!/^https?:\/\/(www\.)?pexels\.com\/photo\//i.test(content)) return "";
  const match = content.match(/-(\d+)\/?(\?.*)?$/) || content.match(/\/photo\/(?:[^/]+\/)?(\d+)\/?(\?.*)?$/);
  if (!match) return "";
  const id = match[1];
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;
}

function linkInitial(capture) {
  const source = capture.sourceDomain || capture.sourceTitle || "Web";
  return source.trim().charAt(0).toUpperCase() || "W";
}

function youtubeIdFromUrl(value) {
  try {
    const url = new URL(value);
    if (url.hostname.includes("youtu.be")) return url.pathname.split("/").filter(Boolean)[0] || "";
    if (url.pathname.includes("/embed/")) return url.pathname.split("/embed/")[1].split(/[/?#]/)[0] || "";
    if (url.pathname.includes("/shorts/")) return url.pathname.split("/shorts/")[1].split(/[/?#]/)[0] || "";
    return url.searchParams.get("v") || "";
  } catch {
    const embedMatch = value.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/i);
    return embedMatch ? embedMatch[1] : "";
  }
}

function videoThumbnailUrl(value) {
  const id = youtubeIdFromUrl(value);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

function videoEmbedUrl(value) {
  const id = youtubeIdFromUrl(value);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : "";
}

function embedUrlFromHtml(value) {
  const match = value.match(/src=["']([^"']+)["']/i);
  if (!match) return "";
  const src = match[1];
  if (src.startsWith("//")) return `https:${src}`;
  return src;
}

function playVideo(button) {
  const url = button.dataset.play;
  if (!url) return;
  const preview = button.closest(".video-preview");
  if (!preview) return;
  preview.innerHTML = `<iframe title="Video preview" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen src="${escapeAttribute(url)}"></iframe>`;
  preview.classList.add("is-playing");
}

async function copyCaptureContent(id) {
  const capture = state.captures.find((item) => item.id === id);
  if (!capture) return;
  try {
    await navigator.clipboard.writeText(capture.content);
  } catch {
    const area = document.createElement("textarea");
    area.value = capture.content;
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
}

function duplicateCapture(id) {
  const capture = state.captures.find((item) => item.id === id);
  if (!capture) return;
  state.captures.push({
    ...structuredClone(capture),
    id: `cap-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    x: capture.x + 36,
    y: capture.y + 36,
    timestamp: new Date().toISOString()
  });
  render();
}

function openCapture(id) {
  const capture = state.captures.find((item) => item.id === id);
  if (!capture || !/^https?:\/\//i.test(capture.content)) return;
  window.open(capture.content, "_blank", "noopener,noreferrer");
}

function downloadCaptureFile(id) {
  const capture = state.captures.find((item) => item.id === id);
  if (!capture) return;

  const link = document.createElement("a");
  const objectUrl = capture.downloadUrl || URL.createObjectURL(new Blob([capture.content], {
    type: capture.fileType || "application/octet-stream"
  }));

  link.href = objectUrl;
  link.download = capture.fileNames ? "copy-rabbit-files.txt" : capture.fileName || capture.content || "download";
  document.body.append(link);
  link.click();
  link.remove();

  if (!capture.downloadUrl) URL.revokeObjectURL(objectUrl);
}

function deleteCapture(id) {
  state.captures = state.captures.filter((capture) => capture.id !== id);
  render();
}

function openSpaceMenu() {
  el.spaceMenu.classList.add("is-open");
  el.spaceTrigger.setAttribute("aria-expanded", "true");
}

function closeSpaceMenu() {
  el.spaceMenu.classList.remove("is-open");
  el.spaceTrigger.setAttribute("aria-expanded", "false");
}

function toggleSpaceMenu() {
  if (el.spaceMenu.classList.contains("is-open")) closeSpaceMenu();
  else openSpaceMenu();
}

function selectSpace(id, closeMenu = true) {
  if (!state.spaces.some((space) => space.id === id)) return;
  if (state.activeSpaceId !== id) {
    state.activeSpaceId = id;
    state.panX = null;
    state.panY = null;
    state.zoom = defaultZoomForSpace(id);
  }
  if (closeMenu) closeSpaceMenu();
  render();
}

function renameSpace(id, name) {
  const space = state.spaces.find((item) => item.id === id);
  if (!space) return;
  space.name = name.trim() || "Untitled canvas";
  if (id === state.activeSpaceId) el.activeSpaceName.textContent = space.name;
  saveState();
}

function deleteSpace(id) {
  if (state.spaces.length === 1) {
    const only = state.spaces[0];
    only.name = "Untitled canvas";
    state.captures = state.captures.filter((capture) => capture.spaceId !== only.id);
    render();
    return;
  }

  const index = state.spaces.findIndex((space) => space.id === id);
  if (index === -1) return;
  state.spaces.splice(index, 1);
  state.captures = state.captures.filter((capture) => capture.spaceId !== id);

  if (state.activeSpaceId === id) {
    const next = state.spaces[Math.max(0, index - 1)] || state.spaces[0];
    state.activeSpaceId = next.id;
    state.panX = null;
    state.panY = null;
    state.zoom = defaultZoomForSpace(next.id);
  }

  render();
}

function addSpace() {
  const count = state.spaces.filter((space) => space.name.startsWith("New Canvas")).length + 1;
  const name = count === 1 ? "New Canvas" : `New Canvas ${count}`;
  const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now().toString(36)}`;
  state.spaces.push({ id, name, color: "#87951a" });
  state.activeSpaceId = id;
  state.panX = null;
  state.panY = null;
  state.zoom = emptyZoom;
  render();
  openSpaceMenu();
  const input = el.spaceMenu.querySelector(`[data-space-name="${id}"]`);
  if (input) {
    input.focus();
    input.select();
  }
}

function extractColors(content) {
  return [...new Set((content.match(/#[0-9a-f]{3,8}\b/gi) || []).map((item) => item.toLowerCase()))].slice(0, 6);
}

function isImageSource(capture) {
  return capture.type === "image" || !!imagePreviewUrlFromContent(capture.content);
}

function safeDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

function readableDomain(domain) {
  return domain.split(".")[0].replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function shortUrl(value) {
  return value.length > 36 ? `${value.slice(0, 33)}...` : value;
}

function trimContent(content, max) {
  return content.length > max ? `${content.slice(0, max - 1)}...` : content;
}

function fileExtension(capture) {
  const name = capture.fileName || capture.content || "";
  const extension = name.includes(".") ? name.split(".").pop().slice(0, 4) : "File";
  return extension.toUpperCase();
}

function iconSvg(name) {
  const icons = {
    open: `<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M96 64h96v96"></path><path d="M88 168 192 64"></path><path d="M160 184v24a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V104a8 8 0 0 1 8-8h24"></path></svg>`,
    copy: `<svg viewBox="0 0 256 256" aria-hidden="true"><rect x="88" y="40" width="128" height="128" rx="8"></rect><path d="M168 168v40a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h40"></path></svg>`,
    trash: `<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M216 56H40"></path><path d="M96 56V40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v16"></path><path d="M200 56l-8 152a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16L56 56"></path><path d="M104 104v64"></path><path d="M152 104v64"></path></svg>`,
    download: `<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M128 32v120"></path><path d="m80 104 48 48 48-48"></path><path d="M48 184v24a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-24"></path></svg>`,
    globe: `<svg viewBox="0 0 256 256" aria-hidden="true"><circle cx="128" cy="128" r="88"></circle><path d="M40 128h176"></path><path d="M128 40c24 24 36 56 36 88s-12 64-36 88c-24-24-36-56-36-88s12-64 36-88z"></path></svg>`,
    code: `<svg viewBox="0 0 256 256" aria-hidden="true"><path d="m96 80-48 48 48 48"></path><path d="m160 80 48 48-48 48"></path><path d="m144 56-32 144"></path></svg>`,
    file: `<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M152 32H72a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V72Z"></path><path d="M152 32v40h40"></path></svg>`
  };
  return icons[name] || icons.copy;
}

function relativeTime(timestamp) {
  const seconds = Math.max(1, Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000));
  if (seconds < 10) return "Captured 3s ago";
  if (seconds < 60) return `Captured ${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes === 1 ? "New" : `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll("'", "\\'");
}

function escapeSrcdoc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;");
}

window.addEventListener("pointermove", moveCanvas);
window.addEventListener("mousemove", moveCanvas);
window.addEventListener("pointerup", endCanvasMove);
window.addEventListener("mouseup", endCanvasMove);
window.addEventListener("resize", () => {
  if (!localStorage.getItem(stateKey)) {
    state.panX = null;
    state.panY = null;
    render();
  }
});

el.spaceTrigger.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleSpaceMenu();
});

document.addEventListener("click", (event) => {
  if (!el.spacePicker.contains(event.target)) closeSpaceMenu();
});

el.newSpaceBtn.addEventListener("click", addSpace);
el.canvasShell.addEventListener("pointerdown", startPan);
el.canvasShell.addEventListener("mousedown", startPan);
el.canvasStage.addEventListener("click", (event) => {
  const play = event.target.closest("[data-play]");
  if (!play) return;
  event.stopPropagation();
  playVideo(play);
});
el.canvasShell.addEventListener("dragover", (event) => {
  event.preventDefault();
});
el.canvasShell.addEventListener("drop", (event) => {
  event.preventDefault();
  const files = [...event.dataTransfer.files];
  const file = files[0];
  if (file) {
    if (file.type.startsWith("image/")) captureImageFile(file, event.clientX, event.clientY);
    else captureGenericFile(file, event.clientX, event.clientY);
    return;
  }
  const text = event.dataTransfer.getData("text/plain");
  if (text) captureAtViewport(text, event.clientX, event.clientY, { method: "Drag and Drop" });
});
el.canvasShell.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (event.metaKey || event.ctrlKey) {
    zoomAt(event.clientX, event.clientY, Math.exp(-event.deltaY * 0.0024));
    saveState();
    return;
  }

  state.panX -= event.deltaX;
  state.panY -= event.deltaY;
  scheduleViewport();
  saveState();
}, { passive: false });

window.addEventListener("paste", (event) => {
  if (event.target.closest?.("[contenteditable], input, textarea, select")) return;
  if (!event.clipboardData) return;
  const fileItem = [...event.clipboardData.items].find((item) => item.kind === "file");
  if (fileItem) {
    const file = fileItem.getAsFile();
    if (file?.type.startsWith("image/")) captureImageFile(file);
    else if (file) captureGenericFile(file);
    return;
  }
  const text = event.clipboardData.getData("text/plain");
  if (text) captureAtViewport(text, window.innerWidth / 2, window.innerHeight / 2, { method: state.captureOn ? "Capture Mode" : "Manual Paste" });
});

render();

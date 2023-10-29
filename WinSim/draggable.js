const desktop = document.getElementById("desktop");
const resizableDiv = document.getElementById("resizable-div");
let isResizing = false;
let offsetX, offsetY, initialWidth, initialHeight;

desktop.addEventListener("mousedown", (e) => {
    isResizing = true;
    offsetX = e.clientX - resizableDiv.getBoundingClientRect().left;
    offsetY = e.clientY - resizableDiv.getBoundingClientRect().top;
    initialWidth = parseFloat(getComputedStyle(resizableDiv).width);
    initialHeight = parseFloat(getComputedStyle(resizableDiv).height);

    // Set initial margin to position the top-left corner at the cursor
    resizableDiv.style.marginTop = `${offsetY}px`;
    resizableDiv.style.marginLeft = `${offsetX}px`;

    document.addEventListener("mousemove", resizeDiv);
    document.addEventListener("mouseup", stopResizing);
});

function resizeDiv(e) {
    if (!isResizing) return;

    resizableDiv.style.display = "block"
    const newWidth = e.clientX - offsetX + initialWidth;
    const newHeight = e.clientY - offsetY + initialHeight;

    resizableDiv.style.width = `${newWidth}px`;
    resizableDiv.style.height = `${newHeight}px`;
}

function stopResizing() {
    isResizing = false;
    document.removeEventListener("mousemove", resizeDiv);
    document.removeEventListener("mouseup", stopResizing);

    // Reset the margin values
    resizableDiv.style.marginTop = '0';
    resizableDiv.style.marginLeft = '0';
    resizableDiv.style.width = '0';
    resizableDiv.style.height = '0';
    resizableDiv.style.display = "none"
}
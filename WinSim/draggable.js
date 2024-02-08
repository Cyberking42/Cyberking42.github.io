const desktop = document.getElementById("desktop");
const resizableDiv = document.getElementById("resizable-div");
let isResizing = false;
let offsetX, offsetY, initialWidth, initialHeight;
const threshold = 1; // Threshold value for determining when to invert scale

desktop.addEventListener("mousedown", (e) => {
    isResizing = true;
    const rect = resizableDiv.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    initialWidth = rect.width;
    initialHeight = rect.height;

    // Set initial margin to position the top-left corner at the cursor
    resizableDiv.style.marginTop = `${offsetY}px`;
    resizableDiv.style.marginLeft = `${offsetX}px`;
    document.addEventListener("mousemove", resizeDiv);
    document.addEventListener("mouseup", stopResizing);
});

function resizeDiv(e) {
    if (!isResizing) return;

    resizableDiv.style.display = "block";
    const rect = desktop.getBoundingClientRect();

    let newWidth = e.clientX - rect.left - offsetX + initialWidth;
    let newHeight = e.clientY - rect.top - offsetY + initialHeight;

    // Check if the new width or height is smaller than the threshold
    if (newWidth < threshold) {
        // Invert width by setting it to a negative value
        newWidth = -newWidth;

        // Calculate new margin-left value based on the direction of resize
        let newMarginLeft = offsetX - newWidth;

        resizableDiv.style.marginLeft = `${newMarginLeft}px`;
    }

    if (newHeight < threshold) {
        // Invert height by setting it to a negative value
        newHeight = -newHeight;

        // Calculate new margin-top value based on the direction of resize
        let newMarginTop = offsetY - newHeight;

        resizableDiv.style.marginTop = `${newMarginTop}px`;
    }

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
    resizableDiv.style.display = "none";
}

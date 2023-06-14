//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Get the body element
    var body = document.body;

    // Check if the body is empty
    if (body.childElementCount === 0) {
        // Create a new text node with the message
        var textNode = document.createTextNode('DOM load success');

        // Append the text node to the body
        body.appendChild(textNode);
    }
});
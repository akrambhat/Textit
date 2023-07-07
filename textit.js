        var selectedText = "";

        document.addEventListener('mouseup', function () {
            selectedText = window.getSelection().toString().trim();
            if (selectedText !== "") {
                showPopup();
            }
        });

        function showPopup() {
            var popupContainer = document.getElementById("popupContainer");
            popupContainer.style.display = "block";
        }

        function hidePopup() {
            var popupContainer = document.getElementById("popupContainer");
            popupContainer.style.display = "none";
        }

        function highlightText() {
            var span = document.createElement("span");
            span.className = "akramista";
            span.innerText = selectedText;

            var range = window.getSelection().getRangeAt(0);
            range.deleteContents();
            range.insertNode(span);

            hidePopup();
        }

        function deleteHighlight() {
            var range = window.getSelection().getRangeAt(0);
            var span = range.commonAncestorContainer;
            if (span.nodeType === 3) {
                span = span.parentNode;
            }
            if (span.classList.contains("akramista")) {
                span.outerHTML = span.innerHTML;
            }

            hidePopup();
        }

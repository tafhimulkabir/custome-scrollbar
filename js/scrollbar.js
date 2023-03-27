/**
 * CustomScrollbar is a class that creates a custom scrollbar for a given element.
 * It listens to various events such as scroll, mouse down, mouse up, wheel, and resize
 * to update the position and size of the scrollbar elements.
 * 
 * @param {string} selector - A CSS selector that identifies the element to add a custom scrollbar to.
 * @returns {void}
 */
class CustomScrollbar {

    /**
     * This is the constructor function that initializes a custom scrollbar functionality 
     * for an element selected by a provided selector. 
     */
    constructor(selector)
    {
        // Select the necessary DOM elements.
        this.appScrollbar = document.querySelector(selector);                                   // Select scrollbar container.
        this.appScrollbarTrack = document.querySelector('#app__scrollbar__track');              // Select scrollbar track.
        this.appScrollbarThumb = document.querySelector('.app__scrollbar__thumb');              // Select scrollbar thumb.
        this.appScrollableContent = document.querySelector('.app__scrollable__content');        // Select scrollable content container.

        // Add event listeners to the content, thumb, and scrollbar elements

    }

    /**
     * handleScroll is a function that updates the position of the thumb element
     * based on the current scroll position of the content element.
     * 
     * @returns {void}
     */
    handleScroll()
    {
        const scrollPercentage = (this.content.scrollTop / (this.content.scrollHeight - this.content.clientHeight)) * 100;
        const thumbPosition = scrollPercentage * (this.appScrollbarTrack.clientHeight - this.appScrollbarThumb.clientHeight) / 100;
        requestAnimationFrame(() => {
            this.appScrollbarThumb.style.top = thumbPosition + 'px';
        });
    }
}
class CustomScrollbar {

    /**
     * Constructor 
     */
    constructor(selector)
    {
        this.appScrollbar = document.querySelector(selector);                                   // Select scrollbar container.
        this.appScrollbarTrack = document.querySelector('#app__scrollbar__track');              // Select scrollbar track.
        this.appScrollbarThumb = document.querySelector('.app__scrollbar__thumb');              // Select scrollbar thumb.
        this.appScrollableContent = document.querySelector('.app__scrollable__content');        // Select scrollable content container.
    }

}
(function(doc, win){
    'use strict'

    const ActiveItem = function(seletorLink, parentItens, linkActive) {
        this.item = doc.querySelectorAll(seletorLink);
        this.parentItens = parentItens;
        this.linkActive = linkActive;
    }

    ActiveItem.prototype.activeItemMenu = function() {
        let parentItens = this.parentItens;
        let linkActive = this.linkActive;
        this.item.forEach(function(element, index){
            element.addEventListener('click', function(event) {
                const menuItens = event.target.closest(parentItens);
                const converToArray = Array.from(menuItens.children);
                converToArray.forEach((element) => {
                    element.firstElementChild.classList.remove(linkActive);
                });
                event.target.classList.add(linkActive);
            })
        });
    }

    win.ActiveLink = ActiveItem;
})(document, window)
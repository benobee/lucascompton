import Scrollmap from "scrollmap";

/* REVEALING MODULE PATTERN*/
(function() {
    const Site = (() => {
        const animate = function() {

            /* Using the scrollmap library we can detect when elements are visible
            in the viewport and exectue callbacks or apply CSS hooks */

            //homepage services
            Scrollmap.trigger({ target: "#services-intro .collection-list" }, (elements) => {
                const list = elements.querySelectorAll(".collection-item");

                Scrollmap.sequence(list, {
                    interval: 150,
                }, (node) => {
                    node.classList.add("fade-in-up");
                });
            });

            //homepage representations
            Scrollmap.trigger({
                target: "section[data-collection-id='59bc21aae9bfdf13c2e7fe39'] .collection-list"
            }, (elements) => {
                const list = elements.querySelectorAll(".collection-item");

                Scrollmap.sequence(list, {
                    interval: 150,
                }, (node) => {
                    node.classList.add("fade-in-up");
                });
            });

            //apply css hooks on mobile
            Scrollmap.trigger({
                target: "#page-59bc21aae9bfdf13c2e7fe39 .collection-item",
                surfaceVisible: 1
            });
        };

        /* faq page with show more button -- user clicks and a class
        is applied to show additional content */

        const faq = function() {
            const button = document.querySelectorAll("#more");

            button.forEach((node) => {
                node.addEventListener("click", (e) => {
                    e.currentTarget.classList.add("hidden");

                    const showMoreText = e.currentTarget.parentElement.querySelectorAll("p");

                    showMoreText.forEach((el) => {
                        el.classList.add("show-more");
                    });

                });
            });
        };

        return {
            init() {
                this.animate();
                this.faq();
            },
            animate,
            faq
        };

    })();

    Site.init();
})();
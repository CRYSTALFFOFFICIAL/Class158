AFRAME.registerComponent("cursor-listener", {
    schema: {
        selecteditemid: {default: "", type: "string",}
    },
    init: function () {
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvent()
    },

    handlePlacesListState: function () {
        const id = this.el.getAttribute("id")
        console.log(id)
        const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"]
        if(placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container")
            placeContainer.setAttribute("cursor-listener", {
                selecteditemid: id
            })
            this.el.setAttribute("material", {
                color: "orange",
                opacity: 1
            })
        }
    },

    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", ()=> {
            this.handlePlacesListState()
        })
    },

    handleMouseLeaveEvent: function () {
        this.el.addEventListener("mouseleave", ()=> {
            const {selecteditemid} = this.data
            if(selecteditemid){
                const el = document.querySelector(`#${selecteditemid}`)
                const id = el.getAttribute("id")
                if(id == selecteditemid){
                    el.setAttribute("material", {
                        color: "#8080FF",
                        opacity: 1
                    })
                }
            }
        })
    }

})
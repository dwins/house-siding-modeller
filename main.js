(() => {
    const init = () => {
        const swatches = [
            "autumn-beige",
            "classic-cream",
            "delray-sand",
            "dover-white",
            "georgian-gray",
            "island-pearl",
            "natural-almond",
            "sandtone",
            "sandy-tan",
            "savannah-blue",
            "silver-mist",
            "spanish-olive",
            "flint",
            "irish-thistle",
            "southern-cypress",
            "stone-mountain-clay",
        ];
        const palette = document.getElementById("palette");
        for (const swatch of swatches) {
            const div = document.createElement("div");
            div.innerHTML = `<img src="${swatch}.png"></img> <span>${swatch}</span>`;
            palette.appendChild(div);
        };
        palette.addEventListener("click", (evt) => {
            if (evt.target.src) {
                document.body.style.setProperty("--swatch", `url(${evt.target.src})`);
            }
        })
    };
    if (document.readyState == "complete") {
        init();
    } else {
        document.addEventListener("readystatechange", init);
    }
})();
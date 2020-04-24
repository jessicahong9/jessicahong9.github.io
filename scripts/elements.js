
function generateSubsectionHeader(parent, id, title) {
    section = parent.append("div")
        .attr("id", id)
        .style("padding", "48px 0px 0px 0px")
    section.append("h2").text(title)
    // section.append("div")
    //     .style("background-color", "#ebebeb")
    //     .style("width", "100%")
    //     .style("height", 1)
}

function generateNavbar(nav, selectedItem) {
    navbar = nav.append("div")
        .attr("class", "maingrid")
        .append("div")
        .style("padding", "24px 0px 0px 0px")
        .append("div")
        .attr("class", "navbar row")
        .style("align-items", "center")
    navbar.append("div")
        .append("a")
        .attr("href", "/index.html")
        .style("text-decoration", "none")
        .style("min-width", 100)
        .text("JESSICA HONG")
    links = navbar.append("div")
        .style("position", "absolute")
        .style("right", 0)
        .style("display", "flex")
        .style("align-items", "center")
    links.append("div")
        .attr("class", selectedItem == "about" ? "active" : "")
        .append("a")
        .attr("href", "/index.html")
        .text("ABOUT")
    links.append("div")
        .attr("class", selectedItem == "projects" ? "active" : "")
        .append("a")
        .attr("href", "/projects.html")
        .text("PROJECTS")
    links.append("div")
        .attr("class", selectedItem == "resume" ? "active" : "")
        .append("a")
        .attr("href", "/JessicaHongResume.pdf")
        .text("RESUME")
}

function generateFooter(foot) {
    footer = foot.append("div")
        .attr("class", "maingrid")
        .style("padding", "48px 0px 48px 0px")
        .append("div")
        .attr("class", "row")
    footer.append("div")
        .attr("class", "divider")
        .style("margin-bottom", 48)
    links = footer.append("div")
        .style("text-align", "center")
        .style("width", "100%")
        .style("display", "flex")
        .style("justify-content", "center")
        .style("align-items", "center")
    const targets = [
        { href: "https://www.linkedin.com/in/jessicahong9/", icon: "fab fa-linkedin-in" },
        { href: "mailto:jwh296@cornell.edu", icon: "fas fa-envelope" }
    ]
    targets.forEach(target => {
        links.append("a")
            .attr("href", target.href)
            .style("padding-left", 5)
            .style("text-decoration", "none")
            .attr("target", "_blank")
            .append("i")
            .attr("class", target.icon)
    });
}

function generateImage(parent, src, borderRadius, margin) {
    image = parent.append("img")
        .attr("draggable", false)
        .attr("ondragstart", "return false;")
        .attr("src", src)
        .style("width", "100%")
    if (borderRadius != null) {
        image.style("border-radius", borderRadius)
    }
    if (margin != null) {
        image.style("margin", margin)
    }
}

function generateImages(parent, series) {
    series.forEach(images => {
        column = parent.append("div")
            .attr("class", "column")
        images.forEach(image => {
            generateImage(column, image)
        });
    });
}

function generateHeader(row, h) {
    header = row.append("div")
        .attr("class", "row")
        .style("margin-bottom", 36)
    leftcolumn = header.append("div")
        .attr("class", "column")
        .style("padding", "0px 15px 0px 15px")
    leftcolumn.append("header").text(h.title)
        .style("background", "-webkit-linear-gradient("
            + (h.color1 != null ? h.color1 : "#292933") + ", "
            + (h.color2 != null ? h.color2 : "#292933")  + ")")
        .style("-webkit-text-fill-color", "transparent")
        .style("-webkit-background-clip", "text")
    if (h.subheader != null) {
        leftcolumn.append("h1").text(h.subheader)
    }
    if (h.description != null) {
        h.description.forEach(d => {
            leftcolumn.append("h5").style("padding-top", 10).text(d)
        });
    }
    if (h.image != null) {
        rightcolumn = header.append("div")
            .attr("class", "column")
            .style("padding", "0px 15px 0px 15px")
        generateImage(rightcolumn, h.image, h.imageRadius, "18px 0px 18px 0px")
    }
    row.append("div")
        .style("background-color", "#ebebeb")
        .style("width", "100%")
        .style("height", 1)
        .style("margin-bottom", 48)
}

function generateBulletpoint(parent, text) {
    div = parent.append("div")
        .style("display", "flex")
        .style("align-items", "top")
    div.append("div")
        .style("background", "#292933")
        .style("height", "3")
        .style("width", "3")
        .style("margin", "15px 8px 0px 8px")
    div.append("h6").text(text)
}
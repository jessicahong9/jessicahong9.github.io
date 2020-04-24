function generateButton(parent, href, title) {
    parent.append("div")
        .style("display", "flex")
        .style("align-items", "center")
        .append("a")
        .style("text-decoration", "none")
        .attr("href", href)
        .append("div")
        .attr("class", "button")
        .text(title)
}
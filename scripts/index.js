function generateProjects(data, section) {
    data.forEach(d => {
        mainrow = section.append("div")
            .attr("class", "mainrow")
        mainrow.append("div")
            .attr("class", "columnleft")
            .append("img")
            .attr("draggable", false)
            .attr("ondragstart", "return false;")
            .attr("src", d.image)
            .style("width", "100%")
        columnright = mainrow.append("div")
            .attr("class", "columnright")
        columnright.append("div")
            .style("display", "flex")
            .style("align-items", "center")
            .style("min-height", 36)
            .append("h3")
            .text(d.title)

        if(d.time != "") {
            columnright.append("h4").text(d.role + " // " + d.time)
        } else {
            columnright.append("h4").text(d.role)
        }

        d.description.forEach(desc => { columnright.append("h6").text(desc) });
        d.links.forEach(l => {
           columnright.append("div")
               .append("a")
               .attr("href", l.href)
               .text(" → " + l.title)
        })
    });
}
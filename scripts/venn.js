const sectorSize = 0;

Events.on(ContentInitEvent, () => {
    // Manually create grid because it can't be set in the content file
    // Code from the Planet constructor
    let venn = Vars.content.planet("the-moon-venn");
    venn.sectors.clear(); // Remove default single sector
    venn.grid = PlanetGrid.create(sectorSize);
    venn.sectors.ensureCapacity(venn.grid.tiles.length);
    for(let i = 0; i < venn.grid.tiles.length; i++){
        venn.sectors.add(new Sector(venn, venn.grid.tiles[i]));
    }
    
    venn.sectorApproxRadius = venn.sectors.first().tile.v.dst(venn.sectors.first().tile.corners[0].v);
    venn.generator = Planets.serpulo.generator; // DEBUG
});
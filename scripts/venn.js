Events.on(ContentInitEvent, () => {
    // Vars.content.planet("the-moon-venn")
});

// Planets.serpulo.orbitSpacing = 3.0

// let venn = new Planet("venn", Planets.serpulo, 1, 0);

// venn.localizedName = "Venn";
// venn.alwaysUnlocked = true;
// venn.generator = new ErekirPlanetGenerator();
// venn.meshLoader = () => new HexMesh(venn, 4);
// venn.accessible = true;
// venn.visible = true;
// // venn.atmosphereColor = Color.valueOf("3db899");
// venn.iconColor = Color.valueOf("e3e3e3");
// venn.startSector = 0;
// venn.hasAtmosphere = false;
// venn.bloom = true;
// // venn.atmosphereRadIn = -0.01;
// // venn.atmosphereRadOut = 0.3;
// venn.defaultEnv = Env.terrestrial;
// venn.tidalLock = true;
// venn.ruleSetter = r => {
//     r.waveTeam = Team.crux;
//     r.placeRangeCheck = false;
//     r.showSpawns = false;
// };

// // Create grid
// venn.grid = PlanetGrid.create(0);

// venn.sectors.ensureCapacity(venn.grid.tiles.length);
// // venn.sectors = new Seq<>();
// for(let i = 0; i < venn.grid.tiles.length; i++){
//     venn.sectors.add(new Sector(venn, venn.grid.tiles[i]));
// }

// venn.sectorApproxRadius = venn.sectors.first().tile.v.dst(venn.sectors.first().tile.corners[0].v);
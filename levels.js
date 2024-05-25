const PIXEL_GAME_SIZE = [128, 128];

const TILE_MAP =
    "01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 01 01 01 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 01 00 00 00 00 00 00 00 00 00 00 00 00 60 "+
    "58 01 00 00 00 00 00 00 00 00 00 00 00 61 00 00 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 61 00 00 00 01 20 20 00 00 00 00 01 "+
    "01 00 00 00 00 00 00 00 01 01 01 00 00 00 00 01 "+
    "01 00 00 00 00 00 00 01 01 01 01 21 00 00 00 01 "+
    "01 01 01 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 01 01 01 00 00 00 00 00 00 00 00 22 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 22 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "00 65 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 01 01 01 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
	"257 " +

	"01 01 01 01 01 01 00 66 00 00 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 58 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "00 00 00 00 00 00 00 61 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 61 00 00 00 00 00 00 00 20 20 20 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 01 01 02 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 68 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 " +
	"256 " +

	"01 01 01 01 01 01 00 66 00 00 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 58 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "00 00 00 00 00 00 00 61 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 01 20 20 20 20 01 00 00 00 00 01 01 "+
    "01 01 00 00 01 01 01 01 01 01 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 61 00 00 00 00 00 00 00 20 20 20 01 "+
    "01 00 00 00 00 00 00 00 57 67 00 00 01 01 02 01 "+
    "01 00 00 00 00 00 00 01 01 01 00 00 01 01 01 01 "+
    "01 56 00 00 00 00 00 01 01 01 00 00 00 01 01 01 "+
    "01 01 01 20 20 20 20 01 01 01 00 00 00 00 01 01 "+
    "01 01 01 01 01 01 01 01 01 01 00 00 00 00 00 01 " +
	"256 " +

	"01 01 01 01 01 01 00 66 00 00 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 58 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "00 00 00 00 00 00 00 61 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 01 20 20 20 20 01 00 00 00 00 01 01 "+
    "01 01 00 00 01 01 01 01 01 01 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 61 00 00 00 00 00 00 00 20 20 20 01 "+
    "01 00 00 00 00 00 00 00 57 67 00 00 01 01 02 01 "+
    "01 00 00 00 00 00 00 01 01 01 00 00 01 01 01 01 "+
    "01 56 00 00 00 00 00 01 01 01 00 00 00 01 01 01 "+
    "01 01 01 20 20 20 20 01 01 01 00 00 00 00 01 01 "+
    "01 01 01 01 01 01 01 01 01 01 00 00 00 00 00 01 "+
	"256 "
;

const TILE_MAP_SIZE = [16, 16];
const TILE_SIZE = PIXEL_GAME_SIZE[0] / TILE_MAP_SIZE[0];
const TILEMAP_ARR = TILE_MAP.split(" ");
const TILES_IN_LEVEL = TILE_MAP_SIZE[0] * TILE_MAP_SIZE[1] + 1;
const NUM_LEVELS = (TILEMAP_ARR.length - 1) / TILES_IN_LEVEL;

//[N, E, S, W]

const Direction = Object.freeze({
    NORTH:   0,
    EAST:  1,
    SOUTH: 2,
    WEST: 3,
    NULL: -1
});

function codeToDirection(code) {
	return [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST, Direction.NULL][code];
}

const MAP_GRPAH = {
	0 : [0, 2, 1,2],
}

function navigateMap(curLevelInd, direction) {
	return MAP_GRPAH[curLevelInd][direction];
}

export {TILE_MAP,MAP_GRPAH, Direction, navigateMap, codeToDirection, TILE_SIZE, TILE_MAP_SIZE, TILEMAP_ARR, NUM_LEVELS, TILES_IN_LEVEL};
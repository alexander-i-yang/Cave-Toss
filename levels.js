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
    "01 00 00 57 56 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 65 00 01 01 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 01 01 01 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+

	"01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
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
    "01 00 00 00 00 00 00 00 57 00 00 00 01 01 02 01 "+
    "01 00 00 00 00 00 00 01 01 01 00 00 01 01 01 01 "+
    "01 56 00 00 00 00 00 01 01 01 00 00 00 01 01 01 "+
    "01 01 01 20 20 20 20 01 01 01 00 00 00 00 01 01 "+
    "01 01 01 01 01 01 01 01 01 01 00 00 00 00 00 01 "
;

//[N, E, S, W]

const Direction = Object.freeze({
    NORTH:   0,
    EAST:  1,
    SOUTH: 2,
    WEST: 3,
    NULL: -1
});

const MAP_GRPAH = {
	0 : [0, 0, 1,3],
}

function navigateMap(curLevelInd, direction) {
	return MAP_GRPAH[curLevelInd][direction];
}

export {TILE_MAP,MAP_GRPAH, Direction, navigateMap};
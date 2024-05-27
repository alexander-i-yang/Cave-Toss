const PIXEL_GAME_SIZE = [128, 128];

const TILE_MAP =
	//0
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 00 00 00 00 00 01 01 01 01 01 "+
    "01 01 01 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 61 00 00 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "00 00 00 00 61 00 00 00 00 00 00 00 00 00 00 00 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "20 20 20 20 52 00 00 00 00 00 00 00 52 20 20 20 "+
    "01 01 01 01 01 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 01 01 01 01 00 00 00 00 00 00 00 22 01 01 01 "+
    "01 01 01 00 00 00 00 00 00 00 00 00 00 22 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "00 00 00 00 64 00 00 00 00 00 00 00 00 00 00 00 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
	"257 283 291 " +

	//1
	"01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 00 00 00 00 61 00 00 00 00 00 00 00 01 "+
    "01 00 00 72 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "00 00 00 01 01 00 00 00 00 00 00 00 00 00 00 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "00 00 64 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "01 01 01 01 01 00 00 00 00 00 00 72 00 00 00 20 "+
    "01 01 01 01 01 01 75 75 75 75 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 68 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 " +
	"256 283 292 " +

	//2
	"01 01 01 01 75 75 75 75 75 01 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 01 01 "+
    "01 00 00 00 00 52 00 00 00 00 00 00 01 01 01 01 "+
    "01 00 00 00 00 01 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "01 52 72 00 00 00 52 00 00 00 00 00 00 00 00 00 "+
    "01 01 01 00 00 00 01 21 00 00 00 00 01 01 01 01 "+
    "01 01 01 00 00 00 01 00 00 00 00 00 00 01 01 01 "+
    "01 01 00 00 00 00 01 52 00 01 00 00 64 00 00 00 "+
    "01 01 00 00 00 52 01 01 01 01 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 " +
	"01 01 01 01 01 01 00 00 00 00 00 01 01 01 01 01 " +
	"01 01 53 00 00 00 00 00 00 52 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 01 01 00 00 00 01 01 " +
	"256 282 292 " +

	//3
	"01 01 01 01 01 01 01 01 01 00 00 00 00 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 01 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 75 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 01 00 00 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "20 20 20 20 20 00 00 00 00 00 00 00 00 00 00 00 "+
    "01 01 01 01 01 00 00 00 00 00 00 00 20 20 20 20 "+
    "01 01 00 00 00 00 00 00 00 00 00 72 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 01 01 01 01 01 " +
	"01 01 01 00 00 00 00 00 00 00 00 01 01 01 01 01 " +
	"01 01 01 00 00 00 00 00 00 00 00 01 01 01 00 00 " +
	"01 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 " +
	"01 01 01 52 00 00 00 64 00 52 00 00 00 00 00 00 " +
	"01 01 01 01 73 73 73 73 73 01 01 01 01 01 01 01 " +
	"257 282 291 " +

	//4
	"01 01 01 01 01 75 75 75 75 75 75 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 23 01 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 72 00 00 01 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 00 00 01 01 01 00 00 00 00 00 00 00 00 01 "+
    "01 22 00 00 01 01 00 00 00 00 00 00 00 00 00 01 "+
    "01 20 00 00 00 00 00 00 00 00 20 20 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 01 01 01 01 01 01 "+
    "20 00 64 00 00 20 20 20 20 00 75 20 20 20 20 00 "+
    "01 01 01 01 01 01 01 01 01 00 01 01 01 01 01 01 " +
	"01 01 01 01 01 01 00 00 00 00 00 00 00 01 01 01 " +
	"01 01 53 00 00 00 00 00 20 20 20 20 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 01 01 01 01 00 00 01 01 " +
	"256 284 292 " +

	//5
	"01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "00 00 00 00 00 00 00 00 72 01 56 00 00 00 75 01 "+
    "00 00 00 00 00 00 00 00 01 01 01 01 00 00 75 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 75 01 "+
    "20 20 20 20 20 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 01 01 01 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 20 00 00 00 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 01 01 00 00 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 " +
	"00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 01 " +
	"00 00 00 00 00 00 00 64 00 00 00 00 00 00 01 01 " +
	"01 01 01 01 01 73 73 73 73 73 73 01 01 01 01 01 "+
	"256 284 291 " +

	//6
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 64 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
	"256 281 292 " +

	//7
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 01 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
	"01 01 00 00 00 00 52 20 20 20 20 20 20 20 20 20 "+
    "00 00 00 00 00 00 01 01 01 01 01 01 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "20 20 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
	"01 01 00 00 00 00 00 00 00 00 00 20 72 20 55 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 01 01 01 01 01 " +
	"01 53 20 20 20 00 00 00 00 00 00 01 01 01 01 01 " +
	"01 01 01 01 01 00 00 00 00 00 00 01 01 01 01 01 " +
	"00 00 75 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"00 72 75 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 01 00 00 00 00 64 00 00 52 20 20 20 55 01 " +
	"01 01 01 01 01 73 73 73 73 73 01 01 01 01 01 01 "+
	"258 284 290 "+

	//8
	"01 01 75 75 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "00 01 00 00 01 01 00 00 00 00 01 01 72 00 01 01 "+
    "00 00 00 00 01 01 00 00 00 00 01 01 01 00 00 00 "+
    "00 00 00 00 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 00 00 00 00 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 00 00 00 00 "+
    "01 01 01 01 01 01 00 00 00 00 01 53 20 20 20 20 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 00 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 00 00 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 00 01 01 00 00 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 00 00 00 00 00 00 00 00 00 00 "+
    "01 01 01 01 01 01 00 00 00 00 00 00 00 00 00 00 "+
    "01 01 01 01 01 01 00 00 00 00 00 00 64 00 00 01 "+
    "01 01 01 01 01 01 00 00 00 00 01 01 01 01 01 01 "+
	"258 283 290 " +

	//9
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 00 00 00 20 20 00 00 00 00 75 00 00 01 01 "+
    "01 01 00 00 00 01 01 00 00 00 00 75 00 20 20 20 "+
    "01 00 00 00 00 01 01 00 00 00 01 01 00 01 01 01 "+
    "01 00 00 00 00 20 20 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 01 01 01 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 01 01 01 " +
	"01 01 00 00 00 00 00 72 00 00 00 00 00 01 01 01 " +
	"01 01 00 00 00 00 01 01 01 00 00 64 00 01 01 01 " +
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
	"257 281 291 " +

	//10
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "20 20 20 00 00 00 00 00 00 00 00 00 00 20 20 20 "+
    "01 01 01 00 00 00 00 00 00 00 00 00 00 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
	"00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "00 20 00 00 00 00 00 00 00 00 00 00 00 00 20 01 "+
    "20 01 00 00 00 00 20 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 20 01 00 00 00 00 00 00 20 01 01 " +
	"01 01 20 00 00 01 01 00 00 00 00 00 00 01 01 01 " +
	"01 01 01 00 00 01 01 20 00 00 00 00 00 01 01 01 " +
	"01 01 01 52 52 01 01 01 64 00 00 00 00 01 01 01 " +
	"01 01 01 01 01 01 01 01 01 73 73 73 73 01 01 01 " +
	"257 282 290 " +

	//11
	"01 01 01 01 01 01 01 01 01 00 00 00 00 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 20 20 20 20 "+
    "01 00 00 00 20 20 20 20 20 20 20 23 01 01 01 01 "+
    "01 00 00 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 00 00 00 00 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 00 00 00 00 00 00 01 01 01 01 01 01 01 00 00 "+
    "01 01 00 00 00 00 00 01 01 01 00 00 00 00 00 00 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 20 " +
	"01 01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 " +
	"01 01 01 21 00 01 21 00 00 00 00 00 00 00 00 01 " +
	"01 01 01 21 00 01 01 21 00 00 00 00 00 00 00 01 " +
	"01 01 01 21 20 01 01 21 20 20 20 20 20 00 64 01 " +
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 " +
	"257 281 290 " +

	//12
	"01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 "+
    "01 01 01 01 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 75 75 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "01 00 75 75 00 00 00 00 00 00 00 00 00 00 00 01 "+
    "20 00 75 75 20 20 20 00 72 00 00 00 00 00 00 01 "+
    "01 64 01 01 01 01 01 01 01 00 00 00 00 00 00 01 "+
    "01 64 00 01 01 01 01 00 00 00 00 00 00 00 52 01 "+
    "01 01 00 01 01 01 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 00 01 01 01 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 01 01 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 01 01 00 00 00 00 00 00 00 00 52 01 01 " +
	"01 00 00 01 01 00 00 00 00 00 00 00 00 01 01 01 " +
	"01 00 00 01 01 01 00 00 00 00 00 00 00 01 01 01 " +
	"01 00 00 01 01 01 00 00 00 00 00 00 00 00 01 01 " +
	"01 00 00 01 01 01 00 00 00 00 00 00 00 00 01 01 " +
	"01 00 00 01 01 01 01 01 73 73 73 01 01 01 01 01 " +
	"257 285 290 " +

	//13
	"01 01 01 01 01 01 01 01 01 00 00 00 00 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 00 64 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 73 73 01 01 00 00 00 00 01 01 01 01 01 01 " +
	"258 283 289 " +

	//14
	"01 00 00 01 01 01 01 01 00 00 00 01 01 01 01 01 "+
    "01 00 00 01 01 01 01 75 00 00 00 00 00 01 01 01 "+
    "01 00 64 01 01 01 01 21 00 00 00 00 00 00 01 01 "+
    "01 00 00 01 01 01 01 01 00 00 00 00 00 00 01 01 "+
    "01 00 00 01 01 01 01 01 00 00 00 00 00 00 00 01 "+
    "01 00 00 01 01 01 01 01 00 00 00 00 00 00 00 01 "+
    "01 00 00 01 01 01 72 00 00 00 00 00 00 00 20 01 "+
    "01 00 00 01 01 01 01 00 00 00 00 00 00 01 01 01 "+
    "01 00 00 01 01 01 01 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 01 01 01 21 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 01 01 01 21 00 00 00 00 00 00 00 01 01 " +
	"01 00 00 75 75 75 75 00 00 00 00 00 00 00 00 01 " +
	"01 00 00 01 01 01 01 00 00 00 00 00 00 00 00 01 " +
	"01 00 00 00 01 01 01 00 00 00 00 00 00 00 01 01 " +
	"01 00 00 00 01 01 01 00 00 00 00 00 00 01 01 01 " +
	"01 00 00 00 01 01 01 01 01 73 73 73 73 01 01 01 " +
	"258 285 291 " +

	//todo: fix big skip
	//15
	"01 00 00 00 01 01 01 01 01 00 00 00 00 01 01 01 "+
    "01 00 00 00 01 00 00 00 00 00 00 00 00 01 01 01 "+
    "01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 01 "+
    "01 00 00 00 23 01 01 01 01 00 00 00 00 01 01 01 "+
    "01 00 00 00 75 01 01 01 00 00 00 00 00 01 01 01 "+
    "01 00 00 00 00 01 01 01 00 00 00 00 00 00 01 01 "+
    "01 00 00 00 00 00 01 01 01 00 00 00 00 00 23 01 "+
    "01 00 00 00 00 00 01 01 01 00 00 00 00 00 23 01 "+
    "01 00 00 00 00 00 00 01 01 00 00 00 00 00 23 01 "+
    "01 00 00 00 00 00 00 00 01 00 00 00 00 00 00 01 "+
    "01 01 01 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"00 00 75 00 00 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 01 01 01 00 00 00 00 00 00 00 00 00 01 01 " +
	"01 01 01 01 01 01 00 00 00 00 00 00 00 00 01 01 " +
	"00 01 01 01 01 01 00 64 00 72 00 00 00 20 01 01 " +
	"00 00 00 01 01 01 01 01 01 01 01 01 01 01 01 01 " +
	"258 285 292 " +

	//16
	"01 01 01 01 01 75 75 75 75 75 75 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 01 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 01 01 01 01 "+
    "01 01 00 00 00 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 00 00 23 01 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 72 00 00 01 00 00 00 00 00 00 00 00 00 01 01 "+
    "01 01 00 00 01 01 01 00 00 00 00 00 00 00 00 01 "+
    "01 21 00 00 01 01 00 00 00 00 00 00 00 00 00 01 "+
    "01 21 00 00 00 00 00 00 00 00 20 20 00 00 00 01 "+
    "01 01 00 00 00 00 00 00 00 00 01 01 01 01 01 01 "+
    "00 00 00 00 00 00 00 00 00 00 01 01 01 01 01 01 "+
    "20 00 64 00 00 20 20 20 00 00 01 01 01 01 01 01 "+
    "01 01 01 01 01 01 01 01 00 00 01 01 01 01 01 01 " +
	"01 01 01 01 01 01 00 00 00 00 00 00 00 01 01 01 " +
	"01 01 53 00 00 00 00 00 20 20 20 20 00 00 01 01 " +
	"01 01 01 01 01 00 00 00 00 00 00 01 01 01 01 01 "+
	"256 280 288 "
;

const TILE_MAP_SIZE = [16, 16];
const TILE_SIZE = PIXEL_GAME_SIZE[0] / TILE_MAP_SIZE[0];
const TILEMAP_ARR = TILE_MAP.split(" ");
const TILES_IN_LEVEL = TILE_MAP_SIZE[0] * TILE_MAP_SIZE[1] + 3;
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
	0 : [8, 5, 1,3],
	1 : [0, 4, ,2],
	2 : [3, 1, ,6],
	3 : [10, 0, 2,9],
	4 : [5, 15, ,1],
	5 : [7, 14, 4,0],
	6 : [, 2, ,],
	7 : [, 12, 5,8],
	8 : [13, 7, 0,10],
	9 : [11, 3, 6,],
	10 : [, 8, 3,11],
	11 : [, 10, 9,],
	12 : [, , 14,7],
	13 : [, , 8,],
	14 : [12, , 15,5],
	15 : [14, ,,4],
}

function navigateMap(curLevelInd, direction) {
	return MAP_GRPAH[curLevelInd][direction];
}

export {TILE_MAP,MAP_GRPAH, Direction, navigateMap, codeToDirection, TILE_SIZE, TILE_MAP_SIZE, TILEMAP_ARR, NUM_LEVELS, TILES_IN_LEVEL};
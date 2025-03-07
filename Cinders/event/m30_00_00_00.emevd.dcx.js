// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    RegisterBonfire(13000009, 3001950, 5, 180, 0); // High Wall of Lothric
    RegisterBonfire(13000003, 3001959, 5, 180, 0); 
    //RegisterBonfire(13000005, 3001955, 5, 180, 0); // Knight's Rest
    RegisterBonfire(13000008, 3001958, 5, 180, 0);
    RegisterBonfire(13000001, 3001951, 5, 180, 0); // Consumed King's Garden
    RegisterBonfire(13000002, 3001952, 5, 180, 0); // High Wall Jail
    RegisterBonfire(13000004, 3001954, 5, 180, 0); // Soldier's Nook
    
    InitializeEvent(0, 13000210, 0);
    InitializeEvent(0, 13000200, 0);
    InitializeCommonEvent(20005780, 3001780, 2); // Dancer - Fogwall - Back Left
    InitializeEvent(0, 13005350, 3001890, 3);
    InitializeEvent(0, 13005810, 0);
    InitializeEvent(0, 13005811, 0);
    InitializeEvent(0, 13005815, 0);
    InitializeEvent(0, 13005820, 0); // Vordt - Setup Entrances
    InitializeEvent(0, 13005812, 0);
    InitializeEvent(0, 13005817, 0);
    InitializeCommonEvent(20005840, 3001800);
    InitializeCommonEvent(20005841, 3001800);
    InitializeEvent(0, 13005825, 13000825, 13000800, 13000896, 13000890, 711);
    InitializeEvent(0, 13005830, 0);
    InitializeEvent(0, 13005831, 0);
    InitializeEvent(0, 13005840, 0); // Oceiros - Setup Entrances
    InitializeEvent(0, 13005835, 0); // Oceiros
    InitializeEvent(0, 13005836, 0); // Oceiros
    InitializeEvent(0, 13005837, 0); // Oceiros - Body Part
    InitializeEvent(0, 13005838, 0); // Oceiros - Body Part
    InitializeEvent(0, 13005595, 0); // CKG - Play Sound on Enter
    InitializeEvent(0, 13005850, 0); // Oceiros - Play Sound in passage to boss
    InitializeEvent(0, 13005890, 0); // Dancer - Setup Entrance
    InitializeEvent(0, 13005895, 0);
    InitializeEvent(0, 13005891, 0);
    InitializeEvent(0, 13005892, 0);
    InitializeEvent(0, 13005893, 0);
    InitializeEvent(0, 13005889, 0);
    InitializeEvent(0, 13005899, 0);
    InitializeEvent(0, 13005880, 0);
    InitializeCommonEvent(20005840, 3001890); // Dancer - Front Fogwall 
    InitializeCommonEvent(20005841, 3001890); // Dancer - Front Fogwall 
    InitializeCommonEvent(20005840, 3001891); // Dancer - Left Fogwall
    InitializeCommonEvent(20005841, 3001891); // Dancer - Left Fogwall
    InitializeCommonEvent(20005840, 3001892); // Dancer - Back Fogwall 
    InitializeCommonEvent(20005841, 3001892); // Dancer - Back Fogwall 
    InitializeCommonEvent(20005840, 3001893); // Dancer - Right Fogwall
    InitializeCommonEvent(20005841, 3001893); // Dancer - Right Fogwall
    InitializeEvent(0, 13005280, 3001316, 830078); // Dancer - Destructible Pillar
    InitializeEvent(1, 13005280, 3001300, 830077); // Dancer - Destructible Pillar
    InitializeEvent(2, 13005280, 3001301, 830077); // Dancer - Destructible Pillar
    InitializeEvent(3, 13005280, 3001302, 830077); // Dancer - Destructible Pillar
    InitializeEvent(4, 13005280, 3001303, 830077); // Dancer - Destructible Pillar
    InitializeEvent(5, 13005280, 3001304, 830077); // Dancer - Destructible Pillar
    InitializeEvent(6, 13005280, 3001305, 830077); // Dancer - Destructible Pillar
    InitializeEvent(7, 13005280, 3001306, 830077); // Dancer - Destructible Pillar
    InitializeEvent(8, 13005280, 3001307, 830077); // Dancer - Destructible Pillar
    InitializeEvent(9, 13005280, 3001308, 830077); // Dancer - Destructible Pillar
    InitializeEvent(10, 13005280, 3001309, 830077); // Dancer - Destructible Pillar
    InitializeEvent(11, 13005280, 3001310, 830077); // Dancer - Destructible Pillar
    InitializeEvent(12, 13005280, 3001311, 830077); // Dancer - Destructible Pillar
    InitializeEvent(13, 13005280, 3001312, 830077); // Dancer - Destructible Pillar
    InitializeEvent(14, 13005280, 3001313, 830077); // Dancer - Destructible Pillar
    InitializeEvent(15, 13005280, 3001314, 830077); // Dancer - Destructible Pillar
    InitializeEvent(16, 13005280, 3001315, 830077); // Dancer - Destructible Pillar
    InitializeEvent(0, 13005480, 0);
    InitializeEvent(0, 13005485, 0);
    InitializeEvent(0, 13005486, 0);
    InitializeEvent(0, 13005487, 0);
    InitializeEvent(0, 13005488, 0);
    InitializeEvent(0, 13005489, 0);
    InitializeEvent(0, 13005481, 0);
    InitializeEvent(0, 13005490, 0);
    InitializeEvent(0, 13005493, 0);
    InitializeEvent(0, 13005494, 0);
    
    // Pus of Man - Within Hollow Setup
    InitializeCommonEvent(20005415, 13001500, 3000610, 3000611, 702, 1702, 3002490, 13005501, 13005502);
    
    InitializeEvent(0, 13005510, 3000610, 3000502, 20000, 1045220557); // Hollow - React to Pus of Man
    InitializeEvent(1, 13005510, 3000610, 3000509, 20001, 0); // Hollow - React to Pus of Man
    InitializeEvent(2, 13005510, 3000610, 3000505, 20002, 1060320051); // Hollow - React to Pus of Man
    InitializeEvent(3, 13005510, 3000610, 3000507, 20000, 1065353216); // Hollow - React to Pus of Man
    
    InitializeEvent(0, 13005200, 3000451, 20001, 1063675494, 0, 3000450, 3000601, 3000607, 3000452);
    InitializeEvent(1, 13005200, 3000450, 20000, 1045220557, 3000451, 0, 3000601, 3000607, 3000452);
    InitializeEvent(2, 13005200, 3000601, 20001, 1053609165, 3000451, 3000450, 0, 3000607, 3000452);
    InitializeEvent(3, 13005200, 3000607, 20001, 0, 3000451, 3000450, 3000601, 0, 3000452);
    InitializeEvent(4, 13005200, 3000452, 20002, 1060320051, 3000451, 3000450, 3000601, 3000607, 0);
    InitializeEvent(0, 13005210, 3000604, 20001, 1056964608, 3000600, 0, 0, 0, 0);
    InitializeEvent(1, 13005210, 3000600, 20000, 1060320051, 3000604, 0, 0, 0, 0);
    InitializeEvent(2, 13005210, 3000484, 20002, 1056964608, 3000454, 0, 0, 0, 0);
    InitializeEvent(3, 13005210, 3000454, 20001, 1060320051, 3000484, 0, 0, 0, 0);
    InitializeEvent(4, 13005210, 3000605, 20002, 1060320051, 0, 0, 0, 0, 0);
    InitializeEvent(1, 13005220, 3000457, 20001, 1050253722, 3000456, 0, 0, 0, 0);
    InitializeEvent(2, 13005220, 3000456, 20000, 1036831949, 3000457, 0, 0, 0, 0);
    InitializeEvent(0, 13005230, 3000464, 20002, 1061997773, 3000463, 0, 0, 0, 0);
    InitializeEvent(1, 13005230, 3000463, 20001, 1050253722, 3000464, 0, 0, 0, 0);
    InitializeEvent(0, 13005025, 0); // Sleeping Hollow
    InitializeEvent(0, 13005530, 0);
    InitializeEvent(0, 13005535, 0);
    InitializeCommonEvent(20005119, 3000230, 3002350, 3002221, 0, 0, 0, 0, 0); // Lothric Knight - Patrol Leader
    InitializeCommonEvent(20005119, 3000237, 3002222, 3002225, 0, 0, 0, 0, 0); // Lothric Knight - Patrol Leader
    InitializeCommonEvent(20005119, 3000254, 3002226, 3002221, 0, 0, 0, 0, 0); // Hollow - Patrol Leader
    InitializeCommonEvent(20005224, 3000280, 701, 1701); // Lothric Priest - Idle State
    InitializeCommonEvent(20005224, 3000281, 701, 1701); // Lothric Priest - Idle State
    
    InitializeCommonEvent(20005119, 3000300, 3002226, 3002221, 0, 0, 0, 0, 0); // Patrol Leader
    
    InitializeCommonEvent(20005220, 3000350, 702, 1702); // Cathedral Knight - Idle State
    InitializeCommonEvent(20005224, 3000351, 702, 1702); // Cathedral Knight - Idle State
    InitializeCommonEvent(20005350, 3000352, 11901120, 53010955); // Cathedral Knight - Magic Stoneplate Ring
    InitializeCommonEvent(20005202, 3000360, 701, 1701, 3002655); // Hollow Thrall - Hang
    InitializeCommonEvent(20005202, 3000361, 701, 1701, 3002655); // Hollow Thrall - Hang
    InitializeCommonEvent(20005210, 3000409, 706, 1706, 1077936128);
    InitializeCommonEvent(20005290, 3000410, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000411, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005200, 3000412, 705, 1705, 3002390);
    InitializeCommonEvent(20005110, 3000418, 3002431);
    InitializeCommonEvent(20005110, 3000419, 3002391);
    InitializeCommonEvent(20005110, 3000420, 3002223);
    InitializeCommonEvent(20005290, 3000421, 700, 1700); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005110, 3000424, 3002224);
    InitializeCommonEvent(20005110, 3000425, 3002224);
    InitializeCommonEvent(20005290, 3000426, 705, 1705); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005110, 3000427, 3002341);
    InitializeCommonEvent(20005220, 3000430, 703, 1703);
    InitializeCommonEvent(20005122, 3000431, 3003, 1086324736); // Hollow - Wake up in radius
    InitializeCommonEvent(20005220, 3000432, 706, 1706);
    InitializeCommonEvent(20005210, 3000432, 706, 1706, 1084227584);
    InitializeCommonEvent(20005213, 3000433, 703, 1703, 1077936128, 3002650);
    InitializeCommonEvent(20005111, 3000434, 3011, 3002380);
    InitializeCommonEvent(20005213, 3000435, 703, 1703, 1077936128, 3002425);
    InitializeCommonEvent(20005213, 3000436, 706, 1706, 1077936128, 3002425);
    InitializeCommonEvent(20005119, 3000440, 3002226, 3002221, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005210, 3000441, 703, 1703, 1077936128);
    InitializeCommonEvent(20005119, 3000442, 3002226, 3002221, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005290, 3000450, 700, 1700); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000451, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000452, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000454, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000456, 700, 1700); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000457, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005110, 3000443, 3002340);
    InitializeCommonEvent(20005290, 3000463, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000464, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005192, 3000471, 3002441);
    InitializeCommonEvent(20005290, 3000473, 700, 1700); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005205, 3000477, 710, 1710, 3002361, 1066192077); // Hollow - Hanging on Ledge
    InitializeCommonEvent(20005205, 3000478, 710, 1710, 3002361, 1065353216); // Hollow - Hanging on Ledge
    InitializeCommonEvent(20005119, 3000482, 3002226, 3002221, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005110, 3000483, 3002340);
    InitializeCommonEvent(20005290, 3000484, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000486, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000487, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005205, 3000490, 710, 1710, 3002361, 1061997773);
    InitializeCommonEvent(20005205, 3000492, 710, 1710, 3002361, 1053609165);
    InitializeCommonEvent(20005220, 3000494, 703, 1703);
    InitializeCommonEvent(20005220, 3000495, 703, 1703);
    InitializeCommonEvent(20005290, 3000500, 703, 1703); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000502, 700, 1700); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000504, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000505, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000507, 700, 1700); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000509, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005122, 3000511, 3000, 1084227584);
    InitializeCommonEvent(20005202, 3000522, 710, 1710, 3002430); // Hollow - Hanging on Ledge
    InitializeCommonEvent(20005111, 3000523, 3003, 3002220); // Hollow - Disable until Triggered
    InitializeCommonEvent(20005210, 3000525, 706, 1706, 1084227584);
    InitializeCommonEvent(20005210, 3000526, 710, 1710, 1084227584);
    InitializeCommonEvent(20005119, 3000537, 3002480, 3002350, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3000538, 3002480, 3002350, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005210, 3000539, 706, 1706, 1077936128);
    InitializeCommonEvent(20005210, 3000540, 706, 1706, 1077936128);
    InitializeCommonEvent(20005290, 3000551, 703, 1703); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000560, 703, 1703); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005214, 3000568, 710, 1710, 1089470464);
    InitializeCommonEvent(20005221, 3000570, 703, 1703, 1084227584);
    InitializeCommonEvent(20005221, 3000571, 705, 1705, 1084227584);
    InitializeCommonEvent(20005221, 3000572, 706, 1706, 1084227584);
    InitializeCommonEvent(20005111, 3000579, 3000, 3002245);
    InitializeCommonEvent(20005202, 3000580, 710, 1710, 3002246);
    InitializeCommonEvent(20005290, 3000600, 700, 1700); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000601, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000604, 701, 1701); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000605, 702, 1702); // Hollow - Wake up when attacked
    InitializeCommonEvent(20005290, 3000607, 701, 1701); // Hollow - Wake up when attacked
    
    // Pus of Man
    InitializeCommonEvent(20005119, 3000615, 3002560, 3002561, 0, 0, 0, 0, 0);
    // Pus of Man
    InitializeCommonEvent(20005119, 3000616, 3002560, 3002561, 0, 0, 0, 0, 0);
    
    InitializeCommonEvent(20005341, 13000359, 3000630, 21500000); // Crystal Lizard
    InitializeCommonEvent(20005110, 3000652, 3002290);
    InitializeCommonEvent(20005110, 3000660, 3002260); // Darkwraith - Wake up
    InitializeCommonEvent(20005110, 3000661, 3002260);
    InitializeCommonEvent(20005110, 3005450, 3002420);
    InitializeCommonEvent(20005192, 3005470, 3002621);
    InitializeCommonEvent(20005410, 3000561, 3005);
    InitializeCommonEvent(20005411, 3000561, 3000560, 703, 1703, 1056964608);
    InitializeCommonEvent(20005411, 3000561, 3000407, 706, 1706, 1067030938);
    InitializeCommonEvent(20005411, 3000561, 3000408, 703, 1703, 1053609165);
    InitializeCommonEvent(20005411, 3000561, 3000428, 706, 1706, 0);
    InitializeCommonEvent(20005410, 3000443, 3005);
    InitializeCommonEvent(20005411, 3000443, 3000444, 705, 1705, 0);
    InitializeCommonEvent(20005411, 3000443, 3000426, 705, 1705, 1053609165);
    InitializeCommonEvent(20005410, 3000400, 3005); // Hollow (Dragon Trap)
    InitializeCommonEvent(20005411, 3000400, 3000401, 703, 1703, 1076677837); // Hollow - Ladder Gank
    InitializeCommonEvent(20005411, 3000400, 3000402, 705, 1705, 1069547520); // Hollow - Ladder Gank
    InitializeCommonEvent(20005411, 3000400, 3000403, 706, 1706, 1065353216); // Hollow - Ladder Gank
    InitializeCommonEvent(20005411, 3000400, 3000405, 703, 1703, 1074161254); // Hollow - Ladder Gank
    InitializeCommonEvent(20005411, 3000400, 3000406, 703, 1703, 1075838976); // Hollow - Ladder Gank
    InitializeEvent(0, 13000380, 3000660, 60940, 6780);
    InitializeCommonEvent(20005340, 13000381, 3000661);
    
    // Lion Knight Albert - Summon
    InitializeCommonEvent(20005700, 13000800, 13005700, 13005701, 3000190, 3002780, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    InitializeEvent(0, 13005826, 13005700, 13005805, 13005885, 3000190, 3002800, 3002896, 3002820, 3002870, 13000801, 13000896, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Boss Fog AI
    InitializeCommonEvent(20005720, 13005700, 13005701, 13000800, 3000190); // Appearance
    InitializeCommonEvent(20005714, 13005700, 13005805, 3000190, 3002829, 13000801); // Player Check
    
    InitializeEvent(0, 13005390, 0); // Basin of Vows Check
    InitializeEvent(0, 13005391, 0); // Basin of Vows - Lion Knight Albert
    
    // Sword Master - Summon
    InitializeCommonEvent(20005700, 13000800, 13005705, 13005706, 3000191, 3002781, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    InitializeEvent(1, 13005826, 13005705, 13005805, 13005885, 3000191, 3002800, 3002896, 3002820, 3002870, 13000801, 13000896, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Boss Fog AI
    InitializeCommonEvent(20005720, 13005705, 13005706, 13000800, 3000191); // Appearance
    InitializeCommonEvent(20005714, 13005705, 13005805, 3000191, 3002829, 13000801); // Player Check
    
    // Hawkwood the Deserter (CKG) - Summon
    InitializeCommonEvent(20005700, 13000830, 13005710, 13005711, 3000192, 3002783);
    InitializeCommonEvent(20005710, 13005710, 13005855, 3000192, 3002831, 3002840); // Boss Fog AI
    InitializeCommonEvent(20005720, 13005710, 13005711, 13000830, 3000192); // Appearance
    
    InitializeCommonEvent(20005520, 13000350, 3001350, 3004350);
    InitializeCommonEvent(20005520, 13000351, 3001351, 3004351); // Chest - End of Oceiros Passage
    InitializeCommonEvent(20005520, 13000352, 3001352, 3004352); // Chest - Anvil Room
    InitializeCommonEvent(20005520, 13000353, 3001353, 3004353); // Chest - Anvil Room
    InitializeCommonEvent(20005520, 13000354, 3001354, 3004354); // Chest - Oceiros Passage
    InitializeCommonEvent(20005521, 13000420, 13005420, 3001250, 3001251, 3000170); // Pot Treasure
    InitializeCommonEvent(20005525, 53000650, 3000650, 3001260, 61); // Anvil Treasure
    InitializeCommonEvent(20005526, 53000950, 3000950, 3001900, 61, 9480); // Path of the Dragon treasure
    InitializeCommonEvent(20005620, 13000300, 13000301, 3001200, 3001201, 3001202, 13001300);
    InitializeCommonEvent(20005624, 13000310, 13000311, 3001210, 3001211, 3001212, 13001310);
    InitializeCommonEvent(20005620, 13000320, 13000321, 3001220, 3001221, 3001222, 13001320);
    InitializeCommonEvent(20005622, 13000330, 13000331, 3001230, 3001231, 3001232, 13001330);
    //InitializeCommonEvent(20005650, 13000990, 3001550); // Illusory Wall to Untended Graves
    InitializeEvent(0, 13005440, 0);
    InitializeEvent(0, 13005550, 0);
    InitializeCommonEvent(20005610, 13000450, 3002460, 3002461);
    InitializeCommonEvent(20005611, 13000450, 3003253, 3001410, 300310);
    SetObjactState(3001410, -1, Disabled, $LAYERS(0));
    InitializeCommonEvent(20005610, 13000455, 3002460, 3002461);
    InitializeCommonEvent(20005611, 13000455, 3003254, 3001414, 300310);
    SetObjactState(3001414, -1, Disabled, $LAYERS(9));
    InitializeCommonEvent(20005610, 13000451, 3002450, 3002451);
    InitializeCommonEvent(20005611, 13000451, 3003302, 3001400, 300320); // Door after shortcut to CKG start
    InitializeCommonEvent(20005610, 13000452, 3002471, 3002470);
    InitializeCommonEvent(20005611, 13000452, 3003304, 3001412, 300310); // Door from Mimic room
    InitializeCommonEvent(20005611, 13000453, 3003303, 3001411, 300312); // Door below Dragon to Mimic room
    InitializeCommonEvent(20005613, 13000405, 3003309, 3001413, -1, 10010861); // Door to High Wall shortcut
    InitializeCommonEvent(20005613, 13000406, 3003310, 3001415, 300313, 10010870); // Door to Greirat cell
    InitializeEvent(0, 13005540, 0);
    DeleteObjectfollowingSFX(3001885, true); // Dancer - Brazier
    DeleteObjectfollowingSFX(3001886, true); // Dancer - Brazier
    DeleteObjectfollowingSFX(3001887, true); 
    DeleteObjectfollowingSFX(3001888, true);
    CreateObjectfollowingSFX(3001885, 200, 800023);
    CreateObjectfollowingSFX(3001886, 200, 800023);
    CreateObjectfollowingSFX(3001887, 200, 800023);
    CreateObjectfollowingSFX(3001888, 200, 800023);
    InitializeCommonEvent(20005530, 13005561, 3001619);
    InitializeCommonEvent(20005530, 13005562, 3001620);
    InitializeCommonEvent(20005530, 13005563, 3001621);
    InitializeCommonEvent(20005530, 13005564, 3001622);
    InitializeCommonEvent(20005530, 13005565, 3001623);
    InitializeCommonEvent(20005530, 13005566, 3001624);
    InitializeCommonEvent(20005530, 13005567, 3001625);
    InitializeCommonEvent(20005530, 13005568, 3001626);
    InitializeCommonEvent(20005530, 13005569, 3001627);
    InitializeCommonEvent(20005530, 13005570, 3001628);
    InitializeCommonEvent(20005530, 13005571, 3001629);
    InitializeCommonEvent(20005530, 13005572, 3001630);
    InitializeCommonEvent(20005530, 13005573, 3001631);
    InitializeCommonEvent(20005530, 13005574, 3001610);
    InitializeCommonEvent(20005530, 13005575, 3001611);
    InitializeCommonEvent(20005530, 13005576, 3001612);
    InitializeCommonEvent(20005530, 13005577, 3001613);
    InitializeCommonEvent(20005530, 13005578, 3001614);
    InitializeCommonEvent(20005530, 13005579, 3001632);
    InitializeCommonEvent(20005530, 13005580, 3001633);
    InitializeCommonEvent(20005530, 13005581, 3001634);
    InitializeCommonEvent(20005530, 13005582, 3001635);
    InitializeCommonEvent(20005530, 13005583, 3001636);
    InitializeCommonEvent(20005530, 13005584, 3001637);
    InitializeCommonEvent(20005530, 13005585, 3001638);
    InitializeCommonEvent(20005530, 13005586, 3001639);
    InitializeCommonEvent(20005530, 13005587, 3001640);
    InitializeCommonEvent(20005530, 13005588, 3001641);
    InitializeCommonEvent(20005530, 13005360, 3001600);
    InitializeCommonEvent(20005530, 13005361, 3001601);
    InitializeCommonEvent(20005530, 13005362, 3001602);
    InitializeCommonEvent(20005530, 13005363, 3001603);
    InitializeCommonEvent(20005530, 13005364, 3001604);
    InitializeCommonEvent(20005530, 13005365, 3001605);
    InitializeCommonEvent(20005530, 13005366, 3001606);
    InitializeCommonEvent(20005530, 13005367, 3001607);
    InitializeCommonEvent(20005540, 13005630, 3001510, 200, 5110, 1056964608, 0, 1065353216); // Burning Object
    InitializeCommonEvent(20005540, 13005631, 3001511, 200, 5110, 1056964608, 0, 1065353216); // Burning Object
    InitializeCommonEvent(20005540, 13005632, 3001512, 200, 5110, 1056964608, 0, 1065353216); // Burning Object
    InitializeCommonEvent(20005540, 13005633, 3001513, 200, 5110, 1056964608, 0, 1065353216); // Burning Object
    RegisterLadder(13000250, 13000251, 3001080); // Ladder
    RegisterLadder(13000252, 13000253, 3001081); // Ladder
    RegisterLadder(13000254, 13000255, 3001082); // Ladder
    RegisterLadder(13000256, 13000257, 3001083); // Ladder 
    RegisterLadder(13000258, 13000259, 3001084); // Ladder
    RegisterLadder(13000260, 13000261, 3001085); // Ladder
    RegisterLadder(13000262, 13000263, 3001086); // Ladder
    InitializeEvent(0, 13000230, 0);
    
    // Greirat
    InitializeCommonEvent(20006003, 3000700, 73000132, 1215, 1200, 1201, 1200, 1214); // NPC Toggle in MP
    InitializeCommonEvent(20006002, 3000700, 1218, 1215, 1219); // Check Death
    InitializeCommonEvent(20006000, 3000700, 1216, 1217, 73000130, 1059481190, 1215, 1219, 0); // Check Hostility
    InitializeCommonEvent(20006001, 3000700, 1216, 1217, 73000130, 3); // Hostility Cooldown
    
    InitializeEvent(0, 13005601, 73000181);
    InitializeEvent(0, 13005602, 3000705, 73000180); // Emma
    InitializeEvent(0, 13005603, 3000705); // Emma
    InitializeCommonEvent(20006002, 3000705, 1438, 1435, 1439); // Emma
    InitializeEvent(0, 13005604, 0);
    InitializeEvent(0, 13005560, 0); // Toggle Rug State
    InitializeEvent(0, 13000360, 0);
    InitializeEvent(0, 13000901, 3001900); // Path of Dragon corpse
    InitializeEvent(0, 13000050, 0); // Cinders Scripts
});

Event(50, Default, function() {
    InitializeEvent(0, 13000410, 0);
    InitializeEvent(0, 13005861, 0);
    InitializeEvent(0, 13005590, 0);
    SetMultiplayerdependentBuffsNonboss(3000850, Enabled); // Ancient Wyvern
    InitializeEvent(0, 13005620, 3000700); // Emma
    InitializeEvent(0, 13005600, 3000705, 3001875, 3001876); // Emma's Chair
    InitializeEvent(0, 13005640, 3000830);
    SetMapSoundState(3002805, Disabled);
    SetMapSoundState(3002806, Disabled);
    SetMapSoundState(3002835, Disabled);
    SetMapSoundState(3002836, Disabled);
    SetMapSoundState(3002898, Disabled);
    SetMapSoundState(3002899, Disabled);
    InitializeEvent(0, 13000050, 0); // Cinders Scripts
});

// Cinders Setup
Event(13000050, Restart, function() {
    // One-time Enemies
    InitializeCommonEvent(20008100, 13000622, 3000622, 13100010); // Boreal Outrider Knight
    
    // Mirror Knight
    InitializeCommonEvent(20008100, 13000720, 3000720, 10300000); // Mirror Knight
    InitializeCommonEvent(20005110, 3000720, 3002720); // Mirror Knight - Wake-up
    
    // Captain Morrel
    InitializeCommonEvent(20090010, 3000732, 3002732, 30310, 63010, 10600, 99005150, 99005151, 13000732); // Setup
    InitializeCommonEvent(20009201, 3000732, 83900); // Kill Taunt
    
    // Huntmaster Ava
    InitializeCommonEvent(20090010, 3000734, 3002734, 30310, 63010, 11600, 99005300, 99005301, 13000734); // Setup
    InitializeCommonEvent(20009201, 3000734, 84700); // Kill Taunt
    
    // The Pursuer
    InitializeCommonEvent(20090010, 3000736, 3002736, 30310, 63010, 11700, 99005310, 99005311, 13000736); // Setup
    InitializeCommonEvent(20009201, 3000736, 81200); // Kill Taunt
    InitializeCommonEvent(20005500, 13000736, 13000005, 3000955, 3001955); // Unlock Knight's Rest bonfire

    // Inquisitor Ashford
    InitializeCommonEvent(20090010, 3000730, 3002730, 30310, 63010, 11400, 99005220, 99005221, 13000730); // Setup
    InitializeCommonEvent(20009201, 3000730, 81300); // Kill Taunt

    // Sounds
    ChangeCharacterEnableState(3000721, Disabled); // DSA
    
    // One-time Loot
    InitializeCommonEvent(20005351, 3000238, 12800010, 53002087, 1); // Lothric Knight Sword / Lothric Knight Shield
    
    // Mimics
    InitializeCommonEvent(20005400, 3000621); // Open Action
    InitializeCommonEvent(20000343, 13000621, 3000621, 53002075); // Mimic
    InitializeCommonEvent(20005400, 3000620); // Open Action
    InitializeCommonEvent(20000343, 13000358, 3000620, 53000960); // Mimic
    
    // Chests
    InitializeCommonEvent(20005520, 13101352, 3101352, 3103352); 
    InitializeCommonEvent(20005520, 13101353, 3101353, 3103353); 
    InitializeCommonEvent(20005520, 13101354, 3101354, 3103354); 
    
    // Warps
    InitializeCommonEvent(20008200, 3001707, 30002, 32, 3204000, 91040, 3202954, 2016, 99030000); // To Archdragon Peak
    InitializeCommonEvent(20008204, 3001706, 30001, 50, 5000971, 91040, 5002951, 2022, 99030005); // To Dreg Heap
    
    // Curses
    InitializeCommonEvent(20081010, 3005760, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 3005760, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 3005760, 250001402, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 3005760, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 3005760, 250001202, 25000157); // Curse of Frailty
    InitializeCommonEvent(20081000, 3005750, 25000100); // Curse of Attraction
    
    // Status Aux
    InitializeCommonEvent(20090200, 3005760, 112610); // Frostbite

    // NG+
    InitializeCommonEvent(20008001, 3005775, 1);
    InitializeCommonEvent(20008001, 3005776, 2);
    InitializeCommonEvent(20008001, 3005777, 3);
    
    // Covenants
    InitializeCommonEvent(20081020, 3005760, 160100400, 160100403); // Company of Champions
    
    // Merchants
    InitializeCommonEvent(20081200, 13000792, 3000792, 90430); // Solaire of Astora - Idle
    InitializeCommonEvent(20081210, 13000792, 3000792); // Solaire of Astora - Hostility
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 3000710); // Companion 1
    InitializeCommonEvent(20080000, 3000711); // Companion 2
    InitializeCommonEvent(20080000, 3000712); // Companion 3
    InitializeCommonEvent(20080000, 3000713); // Companion 4
    InitializeCommonEvent(20080000, 3000714); // Companion 5
    InitializeCommonEvent(20080000, 3000715); // Companion 6
    InitializeCommonEvent(20080000, 3000716); // Companion 7
    InitializeCommonEvent(20080000, 3000717); // Companion 8
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 30, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 3000710, 160760000, 160760201, 30, 0); // Companion 1
    InitializeCommonEvent(20080001, 3000711, 160760001, 160760201, 30, 0); // Companion 2
    InitializeCommonEvent(20080001, 3000712, 160760002, 160760201, 30, 0); // Companion 3
    InitializeCommonEvent(20080001, 3000713, 160760003, 160760201, 30, 0); // Companion 4
    InitializeCommonEvent(20080001, 3000714, 160760004, 160760201, 30, 0); // Companion 5
    InitializeCommonEvent(20080001, 3000715, 160760005, 160760201, 30, 0); // Companion 6
    InitializeCommonEvent(20080001, 3000716, 160760006, 160760201, 30, 0); // Companion 7
    InitializeCommonEvent(20080001, 3000717, 160760007, 160760201, 30, 0); // Companion 8
    
    // Swamp Effects
    InitializeEvent(0, 13000052, 3004500, 160750100);
    InitializeEvent(1, 13000052, 3004501, 160750100);
});

// CKG Swamp
Event(13000052, Restart, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfInoutsideArea(MAIN, 1, 10000, X0_4, 1);
    SetSpeffect(10000, X4_4);
    WaitFixedTimeSeconds(0.8);
    EndUnconditionally(EventEndType.Restart);
});

// Path of the Dragon - Warp to Archdragon Peak
Event(13000051, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfCharacterType(OR_15, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_15, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_15);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002900, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 4400, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfElapsedSeconds(OR_01, 6);
    IfCharacterHasSpeffect(OR_01, 10000, 4400, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfCharacterHasSpeffect(EventEndType.Restart, 10000, 4400, false, ComparisonType.Equal, 1);
    EndIfMultiplayerState(EventEndType.Restart, MultiplayerState.TryingtoCreateSession);
    EndIfMultiplayerState(EventEndType.Restart, MultiplayerState.TryingtoJoinSession);
    WarpPlayer(32, 0, 3202900);
    SetPlayerRespawnPoint(3202900);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(13000200, Default, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 3002550, 1);
    SetEventFlag(13000201, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetEventFlag(13000201, ON);
});

Event(13000210, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000009);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13000009);
    SetEventFlag(13000000, OFF);
});

Event(13000230, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetVisibilityOfMessage(3002280, Disabled);
    IfPlayerHasdoesntHaveItemIncludingBbox(MAIN, ItemType.Goods, 2117, OwnershipState.Owns);
    SetVisibilityOfMessage(3002280, Enabled);
});

Event(13000360, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 711);
    ForceAnimationPlayback(10000, 63010, false, false, false, 0, 1);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 245, 30300);
    CreateObjectfollowingSFX(3001705, 90, 830095); // Point in front of Emma
    SetEventFlag(13000360, ON);
    WaitFixedTimeSeconds(10);
    DeleteObjectfollowingSFX(3001705, true); // Point in front of Emma
});

Event(13000380, Default, function(X0_4, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(X4_4);
    EndUnconditionally(EventEndType.End);
});

Event(13000410, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetEventFlag(13000300, ON);
    SetEventFlag(13000310, ON);
    EndUnconditionally(EventEndType.End);
});

Event(13005025, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(3000404, 703, true, false, false, 0, 1); // Sleeping Hollow
    SetCharacterAIState(3000404, Disabled); // Sleeping Hollow
    IfObjectDestroyed(OR_01, DestructionState.Destroyed, 3001250, ComparisonType.Equal, 1);
    IfCharacterDamagedBy(OR_02, 3000404, 10000); // Sleeping Hollow - Wake up
    IfConditionGroup(OR_03, PASS, OR_01);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, OR_03);
    IfObjectDestroyed(OR_01, DestructionState.Destroyed, 3001250, ComparisonType.Equal, 1);
    IfCharacterDamagedBy(OR_02, 3000404, 10000); // Sleeping Hollow - Wake up
    SkipIfConditionGroupStateUncompiled(2, PASS, OR_02);
    ForceAnimationPlayback(3000404, 1703, false, true, false, 0, 1); // Sleeping Hollow
    SetCharacterAIState(3000404, Enabled); // Sleeping Hollow
});

Event(13005200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    WaitFixedTimeSeconds(1);
    IfDamageType(OR_01, X12_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X16_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X20_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X24_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X28_4, 10000, DamageType.Unspecified);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, X0_4, 10000, 1, 1);
    IfCharacterAIState(AND_02, 3000427, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 3000427, X0_4, 3.5, 1);
    IfCharacterAIState(AND_03, 3000443, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, 3000443, X0_4, 3.5, 1);
    IfCharacterAIState(AND_04, 3000426, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_04, InsideOutsideState.Inside, 3000426, X0_4, 3.5, 1);
    IfCharacterAIState(AND_05, 3000483, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_05, InsideOutsideState.Inside, 3000483, X0_4, 3.5, 1);
    IfCharacterAIState(AND_06, 3005500, AIStateType.Combat, ComparisonType.GreaterOrEqual, 1);
    IfEntityInoutsideRadiusOfEntity(AND_06, InsideOutsideState.Inside, 10000, X0_4, 3.5, 1);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(OR_02, PASS, AND_06);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(X8_4);
    GotoIfCharacterHasSpeffect(Label.LABEL0, X0_4, 5450, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    Label0();
    RequestCharacterAIReplan(X0_4);
});

Event(13005210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    WaitFixedTimeSeconds(1);
    IfDamageType(OR_01, X12_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X16_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X20_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X24_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X28_4, 10000, DamageType.Unspecified);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, X0_4, 10000, 1, 1);
    IfCharacterAIState(AND_02, 3000427, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 3000427, X0_4, 3.5, 1);
    IfCharacterAIState(AND_03, 3000443, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, 3000443, X0_4, 3.5, 1);
    IfCharacterAIState(AND_04, 3000426, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_04, InsideOutsideState.Inside, 3000426, X0_4, 3.5, 1);
    IfCharacterAIState(AND_05, 3000483, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_05, InsideOutsideState.Inside, 3000483, X0_4, 3.5, 1);
    IfCharacterAIState(AND_06, 3005500, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_06, InsideOutsideState.Inside, 10000, X0_4, 3.5, 1);
    IfCharacterHasEventMessage(AND_07, 3000443, 20, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(OR_02, PASS, AND_06);
    IfConditionGroup(OR_02, PASS, AND_07);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(X8_4);
    GotoIfCharacterHasSpeffect(Label.LABEL0, X0_4, 5450, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    Label0();
    RequestCharacterAIReplan(X0_4);
});

Event(13005220, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    WaitFixedTimeSeconds(1);
    IfDamageType(OR_01, X12_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X16_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X20_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X24_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X28_4, 10000, DamageType.Unspecified);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, X0_4, 10000, 1, 1);
    IfCharacterAIState(AND_02, 3000427, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 3000427, X0_4, 3.5, 1);
    IfCharacterAIState(AND_03, 3000443, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, 3000443, X0_4, 3.5, 1);
    IfCharacterAIState(AND_04, 3000426, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_04, InsideOutsideState.Inside, 3000426, X0_4, 3.5, 1);
    IfCharacterAIState(AND_05, 3000483, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_05, InsideOutsideState.Inside, 3000483, X0_4, 3.5, 1);
    IfCharacterAIState(AND_06, 3000561, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_06, InsideOutsideState.Inside, 3000561, X0_4, 3.5, 1);
    IfCharacterAIState(AND_07, 3000408, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_07, InsideOutsideState.Inside, 3000408, X0_4, 3.5, 1);
    IfCharacterAIState(AND_08, 3000560, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_08, InsideOutsideState.Inside, 3000560, X0_4, 3.5, 1);
    IfCharacterAIState(AND_09, 3000579, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 3000579, X0_4, 3.5, 1);
    IfCharacterAIState(AND_10, 3000428, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_10, InsideOutsideState.Inside, 3000428, X0_4, 3.5, 1);
    IfCharacterAIState(AND_11, 3005501, AIStateType.Combat, ComparisonType.GreaterOrEqual, 1);
    IfEntityInoutsideRadiusOfEntity(AND_11, InsideOutsideState.Inside, 10000, X0_4, 3.5, 1);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(OR_02, PASS, AND_06);
    IfConditionGroup(OR_02, PASS, AND_07);
    IfConditionGroup(OR_02, PASS, AND_08);
    IfConditionGroup(OR_02, PASS, AND_09);
    IfConditionGroup(OR_02, PASS, AND_10);
    IfConditionGroup(OR_02, PASS, AND_11);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(X8_4);
    GotoIfCharacterHasSpeffect(Label.LABEL0, X0_4, 5450, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    Label0();
    RequestCharacterAIReplan(X0_4);
});

Event(13005230, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    WaitFixedTimeSeconds(1);
    IfDamageType(OR_01, X12_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X16_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X20_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X24_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X28_4, 10000, DamageType.Unspecified);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, X0_4, 10000, 1, 1);
    IfCharacterAIState(AND_02, 3000418, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 3000418, X0_4, 3.5, 1);
    IfCharacterAIState(AND_03, 3000522, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, 3000522, X0_4, 3.5, 1);
    IfCharacterAIState(AND_04, 3000471, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_04, InsideOutsideState.Inside, 3000471, X0_4, 3.5, 1);
    IfCharacterAIState(AND_05, 3000494, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_05, InsideOutsideState.Inside, 3000494, X0_4, 3.5, 1);
    IfCharacterAIState(AND_06, 3000488, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_06, InsideOutsideState.Inside, 3000488, X0_4, 3.5, 1);
    IfCharacterAIState(AND_07, 3000230, AIStateType.Combat, ComparisonType.Equal, 1); // Lothric Knight
    IfEntityInoutsideRadiusOfEntity(AND_07, InsideOutsideState.Inside, 3000230, X0_4, 3.5, 1);
    IfCharacterAIState(AND_08, 3005502, AIStateType.Combat, ComparisonType.GreaterOrEqual, 1);
    IfEntityInoutsideRadiusOfEntity(AND_08, InsideOutsideState.Inside, 10000, X0_4, 3.5, 1);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(OR_02, PASS, AND_06);
    IfConditionGroup(OR_02, PASS, AND_07);
    IfConditionGroup(OR_02, PASS, AND_08);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(X8_4);
    GotoIfCharacterHasSpeffect(Label.LABEL0, X0_4, 5450, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    Label0();
    RequestCharacterAIReplan(X0_4);
});

Event(13005240, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    WaitFixedTimeSeconds(1);
    IfDamageType(OR_01, X12_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X16_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X20_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X24_4, 10000, DamageType.Unspecified);
    IfDamageType(OR_01, X28_4, 10000, DamageType.Unspecified);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, X0_4, 10000, 1, 1);
    IfCharacterAIState(AND_02, 3005503, AIStateType.Combat, ComparisonType.GreaterOrEqual, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 10000, X0_4, 3.5, 1);
    IfConditionGroup(OR_02, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(OR_02, PASS, AND_06);
    IfConditionGroup(OR_02, PASS, AND_07);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(X8_4);
    GotoIfCharacterHasSpeffect(Label.LABEL0, X0_4, 5450, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    Label0();
    RequestCharacterAIReplan(X0_4);
});

// Destructible Pillar
Event(13005280, Default, function(X0_4, X4_4) {
    IfObjectBurnState(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13000890); // If Dancer is dead
    IfConditionGroup(MAIN, PASS, AND_01);
    SpawnOneshotSFX(TargetEntityType.Object, X0_4, 200, X4_4);
});

Event(13005350, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13000890); // If Dancer is dead
    DeactivateObject(X0_4, Disabled);
    DeleteObjectfollowingSFX(X0_4, true);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoJoinSession);
    IfMultiplayerState(OR_01, MultiplayerState.TryingtoCreateSession);
    IfConditionGroup(MAIN, PASS, OR_01);
    DeactivateObject(X0_4, Enabled);
    CreateObjectfollowingSFX(X0_4, 101, X4_4);
    IfMultiplayerState(OR_02, MultiplayerState.TryingtoJoinSession);
    IfMultiplayerState(OR_02, MultiplayerState.TryingtoCreateSession);
    IfConditionGroup(MAIN, FAIL, OR_02);
    EndUnconditionally(EventEndType.Restart);
});

// Basin of Vows Check
Event(13005390, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000800); // End if Vordt is dead
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 2117, OwnershipState.Owns);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    SetEventFlag(13005392, ON);
    IfPlayerHasdoesntHaveItemIncludingBbox(MAIN, ItemType.Goods, 2117, OwnershipState.Owns);
    SetEventFlag(13005392, OFF);
});

// Basin of Vows - Lion Knight Albert
Event(13005391, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000800); // End if Vordt is dead
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_01, ItemType.Goods, 2117, OwnershipState.Owns);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    IfPlayerHasdoesntHaveItemIncludingBbox(AND_02, ItemType.Goods, 2117, OwnershipState.Owns);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 13005700);
    IfConditionGroup(MAIN, PASS, AND_02);
    ForceAnimationPlayback(3000190, 91030, false, false, false, 0, 1); // Lion Knight Albert
    WaitFixedTimeSeconds(2);
    SendNPCSummonHome(3000190); // Lion Knight Albert
});

// Ancient Wyvern - Setup Encounter
Event(13005480, Restart, function() {
    ChangeCharacterEnableState(3000850, Disabled); // Ancient Wyvern
    SetCharacterGravity(3000850, Disabled);
    SetCharacterAIState(3000850, Disabled);
    SetLockOnPoint(3000850, 220, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13000480);
    ChangeCharacterEnableState(3000850, Enabled);
    IssueShortWarpRequest(3000850, TargetEntityType.Area, 3002600, -1);
    SetNetworkUpdateRate(3000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterImmortality(3000850, Enabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ClearSpeffect(3000850, 11000);
    SetSpeffect(3000850, 11004);
    ForceAnimationPlayback(3000850, 30002, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002620, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 13000480);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 13000481);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 9420);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, AND_04);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, AND_05);
    IssueShortWarpRequest(3000850, TargetEntityType.Area, 3002600, -1);
    ChangeCharacterEnableState(3000850, Enabled);
    SetNetworkUpdateRate(3000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(3000850, 20003, false, false, true, 0, 1);
    SetEventFlag(13000480, ON);
    SetCharacterImmortality(3000850, Enabled);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(3000850, Disabled);
    SetCharacterGravity(3000850, Disabled);
    SetCharacterAIState(3000850, Disabled);
    SetLockOnPoint(3000850, 220, Disabled);
});

// Ancient Wyvern - Item Reward below 20% HP
Event(13005481, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfCharacterHPRatio(AND_01, 3000850, ComparisonType.LessOrEqual, 0.2, ComparisonType.Equal, 1); // Check 20% HP
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9420);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, AND_02);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    AwardItemLot(31410000);
    Label0();
    ForceAnimationPlayback(3000850, 20007, false, true, true, 0, 1);
    ChangeCharacterEnableState(3000850, Disabled);
    SetNetworkUpdateRate(3000850, true, CharacterUpdateFrequency.NoUpdate);
    SetEventFlag(13000481, ON);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(3000850, Disabled);
    SetNetworkUpdateRate(3000850, true, CharacterUpdateFrequency.NoUpdate);
});

// Ancient Wyvern
Event(13005485, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13000480);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002621, 1);
    IfCharacterHasSpeffect(AND_02, 3000850, 11000, true, ComparisonType.Equal, 1); // Ancient Wyvern
    IfCharacterHasSpeffect(AND_02, 3000850, 11001, true, ComparisonType.Equal, 1); // Ancient Wyvern
    IfConditionGroup(AND_03, PASS, OR_01);
    IfConditionGroup(AND_03, PASS, AND_01);
    IfConditionGroup(AND_03, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, AND_03);
    ClearSpeffect(3000850, 11000);
    ForceAnimationPlayback(3000850, 20001, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    ClearSpeffect(3000850, 11000);
    ForceAnimationPlayback(3000850, 30002, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
});

// Ancient Wyvern
Event(13005486, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002617, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(3000850, 11003); // Ancient Wyvern
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Ancient Wyvern
Event(13005487, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002610, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002611, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(3000850, 11004); // Ancient Wyvern
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Ancient Wyvern
Event(13005488, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002615, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002616, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    ClearSpeffect(3000850, 11004); // Ancient Wyvern
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Ancient Wyvern
Event(13005489, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002630, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(3000850, 11005); // Ancient Wyvern
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Ancient Wyvern
Event(13005490, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002640, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002642, 1);
    IfInoutsideArea(OR_03, InsideOutsideState.Inside, 10000, 3002641, 1);
    IfInoutsideArea(OR_03, InsideOutsideState.Inside, 10000, 3002643, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(3000850, 11006); // Ancient Wyvern
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Ancient Wyvern
Event(13005493, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfDamageType(AND_01, 3000850, 10000, DamageType.Unspecified);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3002644, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3002645, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3002646, 1);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(3000850, 11010); // Ancient Wyvern
    EndUnconditionally(EventEndType.Restart);
});

// Ancient Wyvern
Event(13005494, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000481);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9420);
    IfDamageType(AND_01, 3000850, 10000, DamageType.Unspecified);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002647, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(3000850, 11011); // Ancient Wyvern
    EndUnconditionally(EventEndType.Restart);
});

// Hollow - React to Pus of Man
Event(13005510, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterHasEventMessage(MAIN, X0_4, 100, true, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(X12_4);
    IfCharacterHasSpeffect(AND_01, X4_4, 5450, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, X4_4, DeathState.Alive, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X4_4);
});

Event(13005530, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    WaitFixedTimeSeconds(5);
    IssueShortWarpRequest(3000496, TargetEntityType.Area, 3002500, -1);
    IssueShortWarpRequest(3000580, TargetEntityType.Area, 3002501, -1);
    IssueShortWarpRequest(3000526, TargetEntityType.Area, 3002502, -1);
    IssueShortWarpRequest(3000522, TargetEntityType.Area, 3002503, -1);
});

Event(13005535, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterAIState(3000488, Disabled);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002381, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3002382, 1);
    IfCharacterDamagedBy(OR_03, 3000488, 10000);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, OR_03);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 3002381, 1);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, 3002382, 1);
    IfCharacterDamagedBy(OR_04, 3000488, 10000);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, OR_04);
    Label0();
    ForceAnimationPlayback(3000488, 3004, false, false, true, 0, 1);
    SetCharacterAIState(3000488, Enabled);
    EndUnconditionally(EventEndType.End);
    Label1();
    SetCharacterAIState(3000488, Enabled);
    EndUnconditionally(EventEndType.End);
});

Event(13005540, Restart, function() {
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3002510, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 3002511, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002510, 1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 3002511, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetAreaWelcomeMessageState(Disabled);
});

Event(13005550, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfActionButtonInArea(MAIN, 3001810, 3001650); // Point to warp to Undead Settlement
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 2102, OwnershipState.Owns);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    DisplayGenericDialog(10012001, PromptType.OKCANCEL, NumberofOptions.NoButtons, -1, 3);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    SkipIfMultiplayerState(2, MultiplayerState.LeavingSession);
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.NoButtons, -1, 3);
    EndUnconditionally(EventEndType.Restart);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 13100331);
    PlayCutsceneChangeMapCeremonyAndWarpPlayer(31000010, CutscenePlayMode.Skippable, 0, 1, 3102515, 31, 0, 10000);
    SkipUnconditionally(1);
    WarpPlayer(31, 0, 3100974);
    SetEventFlag(13100330, ON);
    WaitFixedTimeFrames(1);
    SetPlayerRespawnPoint(3102515);
    SaveRequest(0);
    EndUnconditionally(EventEndType.Restart);
});

Event(13005560, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 711);
    DeactivateObject(3001872, Disabled);
    DeactivateObject(3001874, Disabled); // Rug in Dancer room
    DeactivateObject(3001871, Enabled);
    DeactivateObject(3001873, Enabled); // Rug in transition to Lothric Castle
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 711);
    Label0();
    DeactivateObject(3001872, Enabled);
    DeactivateObject(3001874, Enabled); // Rug in Dancer room
    DeactivateObject(3001871, Disabled); 
    DeactivateObject(3001873, Disabled); // Rug in transition to Lothric Castle
});

Event(13005590, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    RequestObjectRestoration(3006450);
});

// CKG - Play Sound on Enter
Event(13005595, Restart, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002680, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, AND_02);
    PlaySE(3002681, SoundType.a_EnvironmentalSound, 300000010);
});

Event(13005440, Restart, function() {
    // Setup Lift - High Wall Shortcut
    InitializeCommonEvent(20005621, 13000300, 13000301, 3001200, 3001201, 3004201, 3001202, 3004202, 3002301, 3002302, 13001300, 13004300, 0);
    // Setup Lift - Inner Lift in CKG 
    InitializeCommonEvent(20005625, 13000310, 13000311, 3001210, 3001211, 3004211, 3001212, 3004212, 3002311, 3002312, 13001310, 13004310, 0);
    // Setup Lift - Entrance to CKG 
    InitializeCommonEvent(20005621, 13000320, 13000321, 3001220, 3001221, 3004221, 3001222, 3004222, 3002321, 3002322, 13001320, 13004320, 0);
    // Setup Lift - Down to Darkwraith
    InitializeCommonEvent(20005623, 13000330, 13000331, 3001230, 3001231, 3004231, 3001232, 3004232, 3002331, 3002332, 13001330, 13004330, 0);
});

// Vordt - Boss Start
Event(13005810, Restart, function() {
    SetCharacterAIState(3000800, Disabled);
    SetCharacterHPBarDisplay(3000800, Disabled);
    ChangeCharacterEnableState(3000800, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000800, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipIfNumberOfClientsOfType(1, ClientType.Coop, ComparisonType.Equal, 0);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13000801, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IssueShortWarpRequest(3000800, TargetEntityType.Area, 3002811, -1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002815, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfConditionGroup(MAIN, PASS, AND_01, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    
    Label0($LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 13000801);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneAndWarpPlayer(30000030, CutscenePlayMode.Skippable, 3002810, 30, 0, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipUnconditionally(4, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneAndWarpPlayer(30000030, CutscenePlayMode.UnskippableWithFadeOut, 3002810, 30, 0, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipUnconditionally(1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneToPlayer(30000030, CutscenePlayMode.Unskippable, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    WaitFixedTimeFrames(1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    GotoUnconditionally(Label.LABEL2, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    
    Label1();
    ChangeCharacterEnableState(3000800, Enabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 13000800, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfInoutsideArea(AND_03, InsideOutsideState.Inside, 10000, 3002801, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfConditionGroup(MAIN, PASS, AND_03, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    ForceAnimationPlayback(3000800, 3030, false, false, false, 0, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    
    Label2($LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    ChangeCharacterEnableState(3000800, Enabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SetCharacterAIState(3000800, Enabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SetNetworkUpdateRate(3000800, true, CharacterUpdateFrequency.AlwaysUpdate, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    DisplayBossHealthBar(Enabled, 3000800, 0, 902240, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SetNetworkconnectedEventFlag(13000801, ON, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    InitializeCommonEvent(20020101, 0); // Boss Start
});

// Vordt Kill
Event(13005811, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000800);
    IfCharacterHPRatio(MAIN, 3000800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(3000800, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 3000800, DeathState.Dead, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(3.5);
    HandleBossDefeat(3000800);
    SetMapSoundState(3002805, Disabled);
    ChangeCamera(-1, -1);
    SetEventFlag(13000800, ON);
    SetEventFlag(9301, ON);
    SetEventFlag(6301, ON);
    InitializeCommonEvent(20020001, 0); // Boss Kill
});

Event(13005812, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13000800); // Goto if Vordt is dead
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13000800); // If Vordt is dead
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(3001815, 1, false, false, true, 0, 1); // Door after Vordt
    WaitFixedTimeSeconds(7.5);
    CreateObjectfollowingSFX(3001815, 100, 830101); // Door after Vordt
    EndUnconditionally(EventEndType.End);
    Label0();
    ForceAnimationPlayback(3001815, 2, true, false, false, 0, 1); // Door after Vordt
    CreateObjectfollowingSFX(3001815, 100, 830101); // Door after Vordt
});

Event(13005815, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000800); // End if Vordt is dead
    IfCharacterHasEventMessage(MAIN, 3000800, 10, true, ComparisonType.Equal, 1);
    EndUnconditionally(EventEndType.End);
});

Event(13005817, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000800); // End if Vordt is dead
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13005805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002801, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCamera(3300, 3300);
});

Event(13005820, Restart, function() {
    // Vordt - Enter Boss Room
    InitializeCommonEvent(20005800, 13000800, 3001800, 3002800, 13005805, 3001800, 3000800, 13000801, 0); 
    // Vordt - Client Enter Boss Room
    InitializeCommonEvent(20005801, 13000800, 3001800, 3002800, 13005805, 3001800, 13005806); 
    // Vordt - Toggle Fogwall State
    InitializeCommonEvent(20005820, 13000800, 3001800, 3, 13000801); 
    
    // Skip if Vordt is dead
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 13000801); 
    InitializeCommonEvent(20001836, 13000800, 13005805, 13005806, 13005810, 3002805, 3002806, 13005815);
    SkipUnconditionally(1);
    
    InitializeCommonEvent(20005831, 13000800, 13005805, 13005806, 3002800, 3002805, 3002806, 13005815);
    InitializeCommonEvent(20005810, 13000825, 3001800, 3002800, 10000); // Vordt - Fogwall
});

Event(13005825, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(OR_01, CHANGE, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(OR_01, CHANGE, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(OR_01, CHANGE, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    Label0();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_01);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, X16_4);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, X4_4);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_03);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, X8_4);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_04);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, X16_4);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_04);
    Label1();
    SetEventFlag(X0_4, OFF);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
    Label2();
    SetEventFlag(X0_4, ON);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
});

Event(13005826, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X8_4);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, AND_02);
    RequestCharacterAICommand(X12_4, 10, 0);
    RequestCharacterAIReplan(X12_4);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, X12_4, X24_4, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X32_4);
    IfConditionGroup(MAIN, PASS, AND_02);
    RotateCharacter(X12_4, X16_4, 60060, true);
    IfInoutsideArea(OR_10, InsideOutsideState.Inside, X12_4, X16_4, 1);
    IfElapsedSeconds(OR_11, 3);
    IfConditionGroup(OR_10, PASS, OR_11);
    IfConditionGroup(MAIN, PASS, OR_10);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, OR_11);
    RequestCharacterAICommand(X12_4, -1, 0);
    RequestCharacterAICommand(X12_4, 50, 3);
    RequestCharacterAIReplan(X12_4);
    SetNetworkUpdateRate(X12_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label0();
    RequestCharacterAICommand(X12_4, 11, 0);
    RequestCharacterAIReplan(X12_4);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, X12_4, X28_4, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, X36_4);
    IfConditionGroup(MAIN, PASS, AND_02);
    RotateCharacter(X12_4, X20_4, 60060, true);
    IfInoutsideArea(OR_12, InsideOutsideState.Inside, X12_4, X20_4, 1);
    IfElapsedSeconds(OR_13, 3);
    IfConditionGroup(OR_12, PASS, OR_13);
    IfConditionGroup(MAIN, PASS, OR_12);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, OR_13);
    RequestCharacterAICommand(X12_4, -1, 0);
    RequestCharacterAIReplan(X12_4);
    SetNetworkUpdateRate(X12_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
});

// Oceiros - Boss Start
Event(13005830, Restart, function() {
    SetCharacterAIState(3000830, Disabled); // Oceiros
    SetCharacterHPBarDisplay(3000830, Disabled); 
    ChangeCharacterEnableState(3000830, Disabled);
    SetMapSoundState(3002835, Disabled); 
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13000838);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 13000830, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002830, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfConditionGroup(MAIN, PASS, AND_01, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13000838);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneToPlayer(30000040, CutscenePlayMode.Skippable, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipUnconditionally(4, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneToPlayer(30000040, CutscenePlayMode.UnskippableWithFadeOut, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipUnconditionally(1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneToPlayer(30000040, CutscenePlayMode.Unskippable, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    WaitFixedTimeFrames(1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    GotoUnconditionally(Label.LABEL1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    
    Label0($LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    ChangeCharacterEnableState(3000830, Enabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 13000830, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 3002830, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    IfConditionGroup(MAIN, PASS, AND_02, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    
    Label1($LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    ChangeCharacterEnableState(3000830, Enabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SetCharacterAIState(3000830, Enabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SetNetworkUpdateRate(3000830, true, CharacterUpdateFrequency.AlwaysUpdate, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    DisplayBossHealthBar(Enabled, 3000830, 0, 902090, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SetObjactState(3001813, 300371, Disabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Oceiros Door to Passage
    SetNetworkconnectedEventFlag(13000838, ON, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    InitializeCommonEvent(20020112, 0); // Boss Start
});

// Oceiros Kill
Event(13005831, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830);
    IfCharacterHPRatio(MAIN, 3000830, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(3000830, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 3000830, DeathState.Dead, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(3.5);
    HandleBossDefeat(3000830);
    SetEventFlag(13000830, ON);
    SetEventFlag(9302, ON);
    SetEventFlag(6302, ON);
    WaitFixedTimeFrames(1);
    SetObjactState(3001813, 300371, Enabled); // Oceiros Door to Passage
    ChangeCamera(-1, -1);
    InitializeCommonEvent(20020012, 0); // Boss Kill
});

// Oceiros Event Message
Event(13005835, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830); // End if Oceiros is dead
    IfCharacterHasEventMessage(MAIN, 3000830, 10, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.End);
});

// Oceiros Event Message
Event(13005836, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830); // End if Oceiros is dead
    IfCharacterHasEventMessage(MAIN, 3000830, 20, true, ComparisonType.Equal, 1);
    SetEventFlag(73000202, ON);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.End);
});

// Oceiros - Body Part
Event(13005837, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830); // End if Oceiros is dead
    IfCharacterHasEventMessage(MAIN, 3000830, 20, true, ComparisonType.Equal, 1);
    CreateNPCPart(3000830, 10, NPCPartType.Part6, 1000, 1, 1, false, false);
});

// Oceiros - Body Part Kill + Body Part
Event(13005838, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830); // End if Oceiros is dead
    IfCharacterHasSpeffect(AND_01, 3000830, 5404, true, ComparisonType.Equal, 1);
    IfNPCPartHP(AND_01, 3000830, 10, 0, ComparisonType.LessOrEqual);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13005837);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(3000830, 20000, false, true, true, 0, 1);
    CreateNPCPart(3000830, 10, NPCPartType.Part6, 1000, 1, 1, false, false);
    EndUnconditionally(EventEndType.Restart);
});

Event(13005840, Restart, function() {
    DeactivateObject(3001813, Disabled); // Oceiros Door
    
    // Oceiros - Enter Boss Room
    InitializeCommonEvent(20005800, 13000830, 3001830, 3002831, 13005855, 3001830, 3000830, 0, 3002830);
    InitializeCommonEvent(20005800, 13000830, 3001831, 3002831, 13005855, 3001830, 3000830, 0, 3002830);
    
    // Oceiros - Client Enter Boss Room
    InitializeCommonEvent(20005801, 13000830, 3001830, 3002831, 13005855, 3001830, 13005856);
    InitializeCommonEvent(20005801, 13000830, 3001831, 3002831, 13005855, 3001830, 13005856);
    
    // Oceiros - Toggle Fogwall State
    InitializeCommonEvent(20005820, 13000830, 3001830, 3, 0);
    InitializeCommonEvent(20005820, 13000830, 3001831, 3, 0);
    
    // Oceiros - Boss Sound
    InitializeCommonEvent(20001836, 13000830, 13005855, 13005856, 13005830, 3002835, 3002836, 13005835);
    
    // Oceiros - Change Camera
    InitializeCommonEvent(20005837, 13000830, 3001830, 1148829696, 2090, 2090, 13005855, 13005856);
    
    // Ocieros - Used Oceiros Fogwall
    InitializeCommonEvent(20005810, 13000830, 3001830, 3002831, 10000);
    InitializeCommonEvent(20005810, 13000830, 3001831, 3002831, 10000);
    
    // Ocieros - Used Dancer Fogwall
    InitializeCommonEvent(20005810, 13000825, 3001890, 3002896, 10000);
});

Event(13005850, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830); // End if Oceiros is dead
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 3002850, 1); // In passage to Oceiros fogwall
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000830); // End if Oceiros is dead
    PlayBgm(ON, 0, 3002850, SoundType.a_EnvironmentalSound, 300000020);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 3002850, 1); // In passage to Oceiros fogwall
    PlayBgm(OFF, 0, 3002850, SoundType.a_EnvironmentalSound, 300000020);
    EndUnconditionally(EventEndType.Restart);
});

Event(13005861, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(13005862, OFF);
    IfMultiplayerState(MAIN, MultiplayerState.FailedtoCreateSession);
    SetEventFlag(13005862, ON);
    IfMultiplayerState(AND_01, MultiplayerState.FailedtoCreateSession);
    IfConditionGroup(MAIN, FAIL, AND_01);
    SetEventFlag(13005862, OFF);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(13005880, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13000885, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    ForceAnimationPlayback(3001087, 0, true, false, false, 0, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Ladder by Dancer
    DeactivateObject(3001870, Disabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Dancer Bowl Object
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13000890, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // If Dancer is dead
    IfActionButtonInArea(MAIN, 3001895, 3001896, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Door to Dancer
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneAndWarpPlayer(30000020, CutscenePlayMode.Skippable, 3002880, 30, 0, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipUnconditionally(4, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneAndWarpPlayer(30000020, CutscenePlayMode.UnskippableWithFadeOut, 3002880, 30, 0, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipUnconditionally(1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    PlayCutsceneToPlayer(30000020, CutscenePlayMode.Unskippable, 10000, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    WaitFixedTimeFrames(1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    RemoveItemFromPlayer(ItemType.Goods, 2117, 1);
    Label0();
    ForceAnimationPlayback(3001087, 10, true, false, false, 0, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Ladder by Dancer
    DeactivateObject(3001870, Enabled, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Dancer Bowl Object
    RegisterLadder(13000264, 13000265, 3001087, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Ladder by Dancer
    ForceAnimationPlayback(3001896, 2, true, false, false, 0, 1, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8)); // Dancer Bowl Holder Object
    SetEventFlag(13000885, ON, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
});

Event(13005889, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000890); // End if Dancer is dead
    IfCharacterType(AND_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    WaitFixedTimeFrames(1);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13005885);
    ChangeCharacterEnableState(3000899, Enabled);
    SetCharacterAnimationState(3000899, Enabled);
    SetCharacterAIState(3000899, Enabled);
    ActivateMultiplayerdependantBuffs(3000899);
    SetEventFlag(13000896, ON);
});

Event(13005890, Restart, function() {
    // Disable fogwalls
    DeactivateObject(3001890, Disabled);
    DeactivateObject(3001891, Disabled);
    DeactivateObject(3001892, Disabled);
    DeactivateObject(3001893, Disabled);
    
    SetCharacterAIState(3000899, Disabled);
    ChangeCharacterEnableState(3000899, Disabled);
    SetCharacterAnimationState(3000899, Disabled);
    SetMapSoundState(3002899, Disabled);
    SetMapSoundState(3002898, Disabled);
    ForceAnimationPlayback(3001895, 2, true, false, false, 0, 1);
    SetObjactState(3001895, 300370, Disabled);
    CreateObjectfollowingSFX(3001360, 210, 800030);
    CreateObjectfollowingSFX(3001360, 212, 800030);
    CreateObjectfollowingSFX(3001360, 214, 800043);
    CreateObjectfollowingSFX(3001361, 210, 800030);
    CreateObjectfollowingSFX(3001361, 212, 800030);
    CreateObjectfollowingSFX(3001361, 214, 800043);
    CreateObjectfollowingSFX(3001362, 210, 800030);
    CreateObjectfollowingSFX(3001362, 212, 800030);
    CreateObjectfollowingSFX(3001362, 214, 800043);
    CreateObjectfollowingSFX(3001363, 210, 800030);
    CreateObjectfollowingSFX(3001363, 212, 800030);
    CreateObjectfollowingSFX(3001363, 214, 800043);
    
    // Delete fogwall VFX
    DeleteObjectfollowingSFX(3001890, true);
    DeleteObjectfollowingSFX(3001891, true);
    DeleteObjectfollowingSFX(3001892, true);
    DeleteObjectfollowingSFX(3001893, true);
    
    DeleteObjectfollowingSFX(3001899, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000890);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13000896);
    IssueShortWarpRequest(3000899, TargetEntityType.Area, 3002893, -1);
    SkipIfNumberOfClientsOfType(2, ClientType.Coop, ComparisonType.Equal, 0);
    
    // Fogwalls
    DeactivateObject(3001890, Enabled);
    //DeactivateObject(3001891, Enabled);
    //DeactivateObject(3001892, Enabled);
    //DeactivateObject(3001893, Enabled);
    
    // Fog Wall VFX
    CreateObjectfollowingSFX(3001890, 101, 3);
    //CreateObjectfollowingSFX(3001891, 101, 3);
    //CreateObjectfollowingSFX(3001892, 101, 3);
    //CreateObjectfollowingSFX(3001893, 101, 3);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(13000881, ON);
    IfCharacterDeadalive(AND_01, 3000705, DeathState.Dead, ComparisonType.Equal, 1);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, 2117, OwnershipState.Owns);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3002700, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    IfCharacterType(AND_02, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_02);
    WaitFixedTimeSeconds(1);
    
    // Delete Fogwalls
    DeleteObjectfollowingSFX(3001890, true);
    DeleteObjectfollowingSFX(3001891, true);
    DeleteObjectfollowingSFX(3001892, true);
    DeleteObjectfollowingSFX(3001893, true);
    
    WaitFixedTimeFrames(1);
    SetEventFlag(13004890, ON);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13005894);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    IssueBossRoomEntryNotification(0);
    SkipIfMultiplayerState(2, MultiplayerState.LeavingSession);
    
    // Fogwalls
    DeactivateObject(3001890, Enabled);
    //DeactivateObject(3001891, Enabled);
    //DeactivateObject(3001892, Enabled);
    //DeactivateObject(3001893, Enabled);
    
    // Fogwall VFX
    CreateObjectfollowingSFX(3001890, 101, 3);
    //CreateObjectfollowingSFX(3001891, 101, 3);
    //CreateObjectfollowingSFX(3001892, 101, 3);
    //CreateObjectfollowingSFX(3001893, 101, 3);
    
    GotoUnconditionally(Label.LABEL3);
    Label1();
    
    // Fogwalls
    DeactivateObject(3001890, Enabled);
    //DeactivateObject(3001891, Enabled);
    //DeactivateObject(3001892, Enabled);
    //DeactivateObject(3001893, Enabled);
    
    // Fogwall VFX
    CreateObjectfollowingSFX(3001890, 101, 3);
    //CreateObjectfollowingSFX(3001891, 101, 3);
    //CreateObjectfollowingSFX(3001892, 101, 3);
    //CreateObjectfollowingSFX(3001893, 101, 3);

    //ChangeCharacterEnableState(3000899, Enabled);
    //SetCharacterAnimationState(3000899, Enabled);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL2, true);
    IfActionButtonInArea(MAIN, 3001890, 3001890);
    RotateCharacter(10000, 3002896, 60060, true);
    Label2();
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 3002895, 1);
    SetEventFlag(13000880, ON);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    IssueBossRoomEntryNotification(0);
    SendInvadingPhantomsHome(0);
    IfCharacterType(AND_03, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_03);
    Label3();
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL4, true);
    EnableBossMapSound(3002899, Enabled);
    Unknown201007(3002898);
    DisplayBossHealthBar(Enabled, 3000899, 0, 905270);
    SetNetworkUpdateRate(3000899, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCamera(3000, 3000);
    SetNetworkUpdateAuthority(3000899, AuthorityLevel.Forced);
    SetNetworkconnectedEventFlag(13005885, ON);
    Label4();
});

Event(13005891, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000890); // End if Dancer is dead
    IfCharacterHasEventMessage(MAIN, 3000899, 10, true, ComparisonType.Equal, 1);
    EnableBossMapSound(3002898, Enabled);
});

Event(13005892, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000890); // End if Dancer is dead
    CreateNPCPart(3000899, 10, NPCPartType.Part5, 1000, 1, 1, false, false);
    IfNPCPartHP(MAIN, 3000899, 10, 0, ComparisonType.LessOrEqual);
    ForceAnimationPlayback(3000899, 20000, false, true, true, 0, 1);
    SetNPCPartHP(3000899, 10, 400, true);
    EndUnconditionally(EventEndType.Restart);
});

// Dancer - Boss Start
Event(13005893, Default, function() {
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(13005885, OFF);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, false);
    SetNetworkSyncState(Disabled);
    
    SetCharacterAIState(3000899, Enabled);
    ChangeCharacterEnableState(3000899, Enabled);
    SetCharacterAnimationState(3000899, Enabled);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13000881);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13005894);
    ForceAnimationPlayback(3001895, 2, false, false, false, 0, 1); // Door to Dancer
    GotoUnconditionally(Label.LABEL1);
    
    Label0();
    ForceAnimationPlayback(3001895, 0, false, false, false, 0, 1); // Door to Dancer
    
    Label1();
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13005885);
    IfCharacterType(AND_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 13000890); // If Dancer is alive
    IfActionButtonInArea(AND_01, 3001890, 3001890); // Used Dancer Fogwall
    IfConditionGroup(MAIN, PASS, AND_01);
    RotateCharacter(10000, 3002896, 60060, true);
    EnableBossMapSound(3002899, Enabled);
    DisplayBossHealthBar(Enabled, 3000899, 0, 905270);
    SetNetworkUpdateRate(3000899, true, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCamera(3000, 3000);
    SetEventFlag(13005886, ON);
    SetEventFlag(13000896, ON);
    EndUnconditionally(EventEndType.End);
});

// Dancer - Boss Kill
Event(13005895, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000890); // End if Dancer is dead
    IfCharacterHPRatio(MAIN, 3000899, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(3000899, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 3000899, DeathState.Dead, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(2.5);
    EnableBossMapSound(3002899, Disabled);
    EnableBossMapSound(3002898, Disabled);
    EnableBossMapSound(-1, Disabled);
    HandleBossDefeat(3000899);
    ExtinguishBurningObjects();
    DeleteObjectfollowingSFX(3001885, true);
    DeleteObjectfollowingSFX(3001886, true);
    DeleteObjectfollowingSFX(3001887, true);
    DeleteObjectfollowingSFX(3001888, true);
    SetEventFlag(13000890, ON); // Set Dancer Kill flag
    SetEventFlag(9300, ON);
    SetEventFlag(6300, ON);
    DeactivateObject(3001890, Disabled); // Dancer - Fogwall
    DeactivateObject(3001891, Disabled); // Dancer - Fogwall
    DeactivateObject(3001892, Disabled); // Dancer - Fogwall
    DeactivateObject(3001893, Disabled); // Dancer - Fogwall 
    DeleteObjectfollowingSFX(3001890, true); // Dancer - Fogwall VFX
    DeleteObjectfollowingSFX(3001891, true); // Dancer - Fogwall VFX
    DeleteObjectfollowingSFX(3001892, true); // Dancer - Fogwall VFX
    DeleteObjectfollowingSFX(3001893, true); // Dancer - Fogwall VFX
    ChangeCamera(-1, -1);
    InitializeCommonEvent(20020011, 0); // Boss Kill
    WaitFixedTimeSeconds(2, $LAYERS(0, 1, 2, 3, 4, 5, 6, 7, 8));
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 13000880);
    ForceAnimationPlayback(3001895, 1, false, true, false, 0, 1); // Door to Dancer
    ForceAnimationPlayback(3001895, 2, false, false, false, 0, 1); // Door to Dancer
});

Event(13005899, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13000890); // End if Dancer is dead
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13005894);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13004890);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneAndWarpPlayer(30000010, CutscenePlayMode.SkippableWithFadeOut, 3002897, 30, 0, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneAndWarpPlayer(30000010, CutscenePlayMode.UnskippableWithFadeOut, 3002897, 30, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(30000010, CutscenePlayMode.Unskippable, 10000);
    DeleteObjectfollowingSFX(3001360, true);
    DeleteObjectfollowingSFX(3001361, true);
    DeleteObjectfollowingSFX(3001362, true);
    DeleteObjectfollowingSFX(3001363, true);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(3001895, 0, false, false, false, 0, 1); // Door to Dancer
    SetEventFlag(13005894, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    DeleteObjectfollowingSFX(3001360, true);
    DeleteObjectfollowingSFX(3001361, true);
    DeleteObjectfollowingSFX(3001362, true);
    DeleteObjectfollowingSFX(3001363, true);
    ForceAnimationPlayback(3001895, 0, false, false, false, 0, 1); // Door to Dancer
    SetEventFlag(13005894, ON);
    EndUnconditionally(EventEndType.End);
});

Event(13000901, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 6079);
    SetNetworkSyncState(Disabled);
    CreateObjectfollowingSFX(X0_4, 90, 62);
    IfActionButtonInArea(MAIN, 4200, X0_4);
    ForceAnimationPlayback(10000, 60070, false, false, false, 0, 1);
    DeleteObjectfollowingSFX(X0_4, true);
    SetEventFlag(13000900, ON);
});

Event(13005600, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1435, 1439);
    BatchSetNetworkconnectedEventFlags(1435, 1439, OFF);
    SetNetworkconnectedEventFlag(1435, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1435);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 50006230);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1435, 1439, OFF);
    SetNetworkconnectedEventFlag(1438, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1420, 1434);
    BatchSetNetworkconnectedEventFlags(1420, 1434, OFF);
    SetNetworkconnectedEventFlag(1420, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 711);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1435);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1420, 1434, OFF);
    SetNetworkconnectedEventFlag(1421, ON);
    Label9();
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1420);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1421);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    DeactivateObject(X8_4, Disabled);
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1438);
    ForceAnimationPlayback(X0_4, 20, false, false, false, 0, 1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 3002705, -1);
    SetObjectInvulnerability(X4_4, Enabled);
    EndUnconditionally(EventEndType.End);
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    Label1();
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 3002710, -1);
    DeactivateObject(X4_4, Disabled);
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1438);
    ForceAnimationPlayback(X0_4, 30000, false, false, false, 0, 1);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterImmortality(X0_4, Enabled);
    EndUnconditionally(EventEndType.End);
    Label10();
    DeactivateObject(X8_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Award Basin of VOws
Event(13005601, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X0_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    AwardItemLot(62320);
});

// Emma - Play Animation
Event(13005602, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetEventFlag(X4_4, OFF);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X4_4);
    ForceAnimationPlayback(X0_4, 20001, false, false, false, 0, 1);
});

// Emma - Play Animation
Event(13005603, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1421);
    IfDamageType(AND_01, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(73000182, ON);
    ForceAnimationPlayback(X0_4, 20001, false, false, false, 0, 1);
});

Event(13005604, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1438);
    SetObjectInvulnerability(3001875, Disabled);
});

Event(13005620, Default, function(X0_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1215, 1219);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1215, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1216);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000062);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1215, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1200, 1214);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1200, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1215);
    Label9();
    SetEventFlag(70000062, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1215);
    SetEventFlag(73000120, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1200);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1216);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1218);
    ForceAnimationPlayback(X0_4, 90360, false, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label1();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    Label2();
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
});

Event(13005640, Restart, function(X0_4) {
    SkipIfEventFlag(4, ON, TargetEventFlagType.EventFlag, 13000830); // Oceiros is dead
    SetCharacterTalkRange(X0_4, 80);
    SetEventFlag(73000200, OFF);
    SetEventFlag(73000201, OFF);
    SetEventFlag(73000202, OFF);
});

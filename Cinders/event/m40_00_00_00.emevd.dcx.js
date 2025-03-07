// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    RegisterBonfire(14000000, 4001950, 5, 180, 0); // Firelink Shrine
    RegisterBonfire(14000001, 4001951, 5, 180, 0); // Cemetery of Ash
    RegisterBonfire(14000003, 4001953, 5, 180, 0); // Untended Graves
    
    InitializeCommonEvent(20005500, 14000800, 14000002, 4000952, 4001952); // Iudex Gundyr
    InitializeCommonEvent(20005500, 14000830, 14000004, 4000954, 4001954); // Champion Gundyr
    InitializeEvent(0, 14005480, 74000012); // Advance Journey (NG+)
    InitializeEvent(0, 14005481, 0); // Disable Loading Tips in Cemetery of Ash
    //InitializeEvent(0, 14005101, 0); // Firelink Shrine - Coiled Sword Placement
    InitializeEvent(0, 14005110, 0, $LAYERS(0)); // Warp to Flameless Shrine
    InitializeEvent(0, 14000130, 0, $LAYERS(0)); // Ashen Estus Flask - Handle Pickup
    InitializeEvent(0, 14005102, 0); // Object Toggle in Firelink Shrine (COA and UG)
    InitializeEvent(0, 14000120, 9210, 9211, 9212, 9213, 9214, 9215); // Check Lords of Cinder completion
    InitializeEvent(0, 14000121, 9211, 2126, 4001111, 4001121, 9353, 69050, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(2, 14000121, 9212, 2124, 4001112, 4001122, 9353, 69040, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(4, 14000121, 9213, 2123, 4001113, 4001123, 9353, 69040, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(6, 14000121, 9214, 2125, 4001114, 4001124, 9353, 69050, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeCommonEvent(20005120, 4000202, 1091043328); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000204, 703, 1703, 1091043328); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000205, 1092616192, 4002205); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000207, 1065353216, 4002207); // Enemy - Wake-up
    InitializeCommonEvent(20005130, 4000209, 1098907648, 4002207); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 4000210, 705, 1705, 1075838976, 4002210); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000211, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000212, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000213, 705, 1705, 4002213); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000214, 703, 1703, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005150, 4000215); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000216, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000217, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000218, 706, 1706, 4002218); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000219, 706, 1706, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 4000220, 703, 1703, 4002220, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 4000221, 706, 1706, 4002220, 1069547520); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000239, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000240, 1097859072); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000241, 706, 1706); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000242, 705, 1705); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000243, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000244, 4002244); // Enemy - Wake-up
    InitializeCommonEvent(20005292, 4000245, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000246, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000247, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000251, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000252, 705, 1705, 1073741824); // Enemy - Wake-up 
    InitializeCommonEvent(20005210, 4000253, 703, 1703, 1095761920); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000255, 703, 1703, 1084227584, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 4000256, 705, 1705, 1075838976, 4002210); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000260, 703, 1703, 1084227584, 1069547520); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000261, 703, 1703, 4002261); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000262, 703, 1703, 4002261); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000263, 703, 1703, 4002261); // Enemy - Wake-up
    InitializeCommonEvent(20005140, 4000265, 4002207, 4000254); // Enemy - Wake-up
    InitializeCommonEvent(20005223, 4000280, 703, 1703, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000281, 703, 1703, 1102053376); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000282, 705, 1705, 1094713344); // Enemy - Wake-up
    InitializeCommonEvent(20005213, 4000284, 705, 1705, 1075838976, 4002284); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000285, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005223, 4000287, 703, 1703, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005201, 4000288, 703, 1703, 4002207, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000289, 1077936128); // Enemy - Wake-up
    InitializeCommonEvent(20005415, 14000290, 4000250, 4000290, 703, 1703, 4002290, 14004290, 14005290, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Pus of Man Setup
    InitializeCommonEvent(20005416, 14000290, 4000250, 4000290, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Pus of Man
    InitializeCommonEvent(20005120, 4000301, 1107296256, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000303, 1065353216, 4002303, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000320, 4002320, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000330, 4002330, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000331, 4002330, $LAYERS(1)); // Enemy - Wake-up
    InitializeEvent(0, 14005300, 4000330, 4002360); // Cathedral Grave Warden - Set Home
    InitializeCommonEvent(20005240, 4000341, 702, 1702, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000342, 702, 1702, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000343, 701, 1701, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000346, 1087373312, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000349, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000350, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000351, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005223, 4000352, 700, 1700, 1073741824, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000355, 700, 1700, 1086324736, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000356, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000357, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000360, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000361, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000362, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000363, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000364, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000365, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005341, 14000390, 4000390, 21509500); // Crystal Lizard - Award Item on Kill
    InitializeCommonEvent(20005342, 9500, 4000500); // Sword Master - Show Treasure if Killed but Treasure missed
    InitializeCommonEvent(20005620, 14000400, 14001400, 4001400, 4001401, 4001402, 14001401); // Bell Tower Lift
    InitializeEvent(0, 14005401, 0); // Setup Bell Tower Lift
    InitializeEvent(0, 14005420, 0); // Setup Ladders
    InitializeCommonEvent(20005640, 14000426, 4001426, 14005426, 14005427, $LAYERS(0)); // Setup Kick Ladder
    InitializeEvent(0, 14005460, 0); // Giant Tree Seed Drop
    InitializeEvent(0, 14005461, 0, $LAYERS(0)); // Way of White Circlet Apperance
    InitializeEvent(0, 14005450, 0, $LAYERS(0)); // Firelink Shrine Music
    InitializeEvent(0, 1405451, 0, $LAYERS(1)); // Disable Map Sound States
    //DeactivateObject(4001801, Disabled);
    InitializeEvent(0, 14005470, 0, $LAYERS(1)); // Area Welcome Message - Lothric Warp
    InitializeEvent(0, 14005471, 0, $LAYERS(1)); // Area Welcome Message - Disable
    InitializeEvent(0, 14005472, 0, $LAYERS(1)); // Area Welcome Message - Enable
    InitializeEvent(0, 14005473, 0, $LAYERS(1)); // Area Welcome Message - Enable
    InitializeEvent(0, 14005474, 0, $LAYERS(1)); // Area Welcome Message - Enable
    InitializeEvent(0, 14005445, 0); // Toggle Message Visbility
    InitializeCommonEvent(20005610, 14000410, 4002410, 4002411); // Setup Door Use Area (Tower Staircase)
    InitializeCommonEvent(20005611, 14000410, 4003252, 4001252, 1400340); // Setup Door (Bell Tower Bottom)
    InitializeCommonEvent(20005613, 14000425, 4003250, 4001250, 3400340, 10010873); // Setup Door (Tower Staircase)
    InitializeEvent(0, 14005442, 0, $LAYERS(1)); // Disable Bell Tower (Bottom) Door
    InitializeEvent(0, 14005440, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Firelink Shrien - Place Sword
    InitializeEvent(0, 14005441, 0, $LAYERS(0)); // Setup Light Sources
    InitializeCommonEvent(20005650, 14000430, 4001430); // Illusory Wall
    InitializeCommonEvent(20005650, 14000431, 4001431); // Illusory Wall
    InitializeCommonEvent(20005650, 14000432, 4001432); // Illusory Wall
    InitializeCommonEvent(20005650, 14000433, 4001433); // Illusory Wall
    InitializeCommonEvent(20005650, 14000434, 4001434); // Illusory Wall
    InitializeCommonEvent(20005650, 14000435, 4001435); // Illusory Wall
    InitializeCommonEvent(20005523, 4001210, 2); // NG+ Treasure
    InitializeCommonEvent(20005523, 4001211, 1); // NG+ Treasure
    InitializeCommonEvent(20005523, 4001212, 1); // NG+ Treasure
    InitializeCommonEvent(20005523, 4001213, 2); // NG+ Treasure
    InitializeCommonEvent(20005524, 4001218, 9512); // Event Treasure (Yuria)
    InitializeCommonEvent(20005525, 54000300, 4000300, 4001728, 62, $LAYERS(1)); // Andre - FFX Treasure
    InitializeCommonEvent(20005526, 54000330, 4000330, 4001221, 62, 13300800, $LAYERS(1)); // Hawkwood - FFX Treasure
    InitializeCommonEvent(20005525, 54000340, 4000340, 4001222, 62, $LAYERS(1)); // Untended Graves Bonfire - FFX Treasure
    
    // Throne messages
    //InitializeEvent(1, 14005484, 10012051, 4001141);
    //InitializeEvent(2, 14005484, 10012052, 4001142);
    //InitializeEvent(3, 14005484, 10012053, 4001143);
    //InitializeEvent(4, 14005484, 10012054, 4001144);
    //InitializeEvent(5, 14005484, 10012055, 4001145);
    
    InitializeEvent(0, 14005800, 0, $LAYERS(0)); // Corrupted Gundyr Kill
    InitializeEvent(0, 14005810, 0, $LAYERS(0)); // Corrupted Gundyr - Setup
    InitializeEvent(0, 14005811, 0, $LAYERS(0)); // Corrupted Gundyr - Handle Start State
    InitializeEvent(0, 14005812, 0, $LAYERS(0)); // Corrupted Gundyr - Handle Lock-on State
    //InitializeEvent(0, 14000816, 0, $LAYERS(0)); // Corrupted Gundyr - Door
    InitializeEvent(0, 14005813, 0, $LAYERS(0)); // Corrupted Gundyr - Handle Camera State
    InitializeEvent(0, 14005820, 0, $LAYERS(0)); // Corrupted Guyndyr - Fogwalls
    
    InitializeEvent(0, 14005830, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr Kill
    InitializeEvent(0, 14005840, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr - Setup Boss
    InitializeEvent(0, 14005841, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundur - Phase Change
    //InitializeEvent(0, 14000842, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr Door
    InitializeEvent(0, 14000859, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr - Fogwalls
    
    InitializeCommonEvent(20005840, 4001800, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005841, 4001800, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005840, 4001810, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Firelink Side
    InitializeCommonEvent(20005841, 4001810, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Firelink Side
    
    // Summon - Sword Master
    InitializeCommonEvent(20005700, 14000830, 14004190, 14005190, 4000190, 4002190, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005711, 14004190, 14005835, 4000190, 4002800, 4002805, 14000831, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005720, 14004190, 14005190, 14000830, 4000190, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005714, 14004190, 14005835, 4000190, 4002806, 14000831, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    
    // Invader - Daughter of Crystal Kriemhild
    InitializeCommonEvent(20005750, 14000830, 14000197, 14004197, 14005197, 4000197, 4002197, 4002198, 0, 0, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005721, 14004197, 14005197, 14000197, 4000197, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20005760, 14000197, 14004197, 14005197, 4000197, $LAYERS(1, 3, 4, 5, 6, 7, 8, 9));
    
    InitializeEvent(0, 14005619, 0, $LAYERS(0)); // Shrine Bonfire
    
    // Fire Keeper - Set Flags on Death
    InitializeCommonEvent(20006002, 4000700, 1018, 1015, 1019, $LAYERS(0));
    // Fire Keeper - Eyes of a Fire Keeper
    InitializeEvent(0, 14005602, 4000700, 60200, $LAYERS(0));
    // Fire Keeper - Eyes of a Fire Keeper Dialogue
    InitializeEvent(0, 14000603, 14000410, 74000132, $LAYERS(0));
    // Fire Keeper - Walk To Bonfire Event
    InitializeEvent(0, 14005604, 4000700, 4002702, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(0, 14005605, 4000700, 12500, 20005, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(1, 14005605, 4000700, 12501, 20006, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(2, 14005605, 4000700, 12502, 20007, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(3, 14005605, 4000700, 12503, 20008, $LAYERS(0));
    // Fire Keeper - Sound State
    InitializeEvent(0, 14005615, 4000700, $LAYERS(0));
    // Fire Keeper - 
    InitializeEvent(0, 14005616, 4000700, $LAYERS(0))
    // Fire Keeper - Level Up Event
    InitializeCommonEvent(20006005, 4000700, 74000135, 74000137, 0, 1067030938, 90250, 90260, 155, $LAYERS(0));
    // Fire Keeper - Sitting Event
    InitializeCommonEvent(20006006, 4000700, 74000136, 74000138, 20000, 20001, 1, 0, $LAYERS(0));
    // Fire Keeper - Warp to Sit Spot
    InitializeCommonEvent(20006040, 4000700, 4002703, 153, $LAYERS(0));
    // Fire Keeper - Warp to Stand Spot
    InitializeCommonEvent(20006040, 4000700, 4002700, 151, $LAYERS(0));
    
    // Ludleth - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000705, 1038, 1035, 1039, $LAYERS(0));
    
    // Andre - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000710, 1178, 1175, 1179, $LAYERS(0));
    // Andre - Smithing Animation
    InitializeEvent(0, 14005661, 4000710, $LAYERS(0));
    
    // Shrine Handmaid - Set Flags if Dead
    InitializeEvent(0, 14005682, 4000715, 1198, 1195, 1199, $LAYERS(0));
    // Shrine Handmaid - Set Ash flags
    InitializeEvent(0, 14005681, 0, $LAYERS(0));
    // Shrine Handmaid - 
    InitializeEvent(0, 14005684, 70000119, $LAYERS(0));
    // Shrine Handmaid - Paladin's Ashes
    InitializeCommonEvent(20006020, 70000125, 70000102, $LAYERS(0));
    // Shrine Handmaid - Xanthous Ashes
    InitializeCommonEvent(20006020, 70000126, 70000106, $LAYERS(0));
    // Shrine Handmaid - Excrement-covered Ahses
    InitializeCommonEvent(20006020, 70000127, 70000104, $LAYERS(0));
    // Shrine Handmaid - Greirat's Ashes (Pillage)
    InitializeCommonEvent(20006020, 70000128, 70000175, $LAYERS(0));
    // Shrine Handmaid - Greirat's Ashes
    InitializeCommonEvent(20006020, 70000129, 70000110, $LAYERS(0));
    // Shrine Handmaid - Patches' Ashes
    InitializeCommonEvent(20006020, 70000130, 70000115, $LAYERS(0));
    // Shrine Handmaid - Grave Warden's Ashes
    InitializeCommonEvent(20006020, 70000131, 70000103, $LAYERS(0));
    // Shrine Handmaid - Yuria's Ashes
    InitializeCommonEvent(20006020, 70000107, 70000116, $LAYERS(0));
    // Shrine Handmaid - Dragon Chaser's Ashes
    InitializeCommonEvent(20006020, 70000132, 70000108, $LAYERS(0));
    // Shrine Handmaid - Patches' Ashes
    InitializeCommonEvent(20006020, 70000133, 70000115, $LAYERS(0));
    // Shrine Handmaid - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000716, 1618, 1615, 1619);
    
    // Greirat - Set Flags on Death
    InitializeCommonEvent(20006002, 4000720, 1218, 1215, 1219, $LAYERS(0));
    // Greirat - Set Hostility
    InitializeCommonEvent(20006000, 4000720, 1216, 1217, 74000330, 1059481190, 1215, 1219, 0, $LAYERS(0));
    // Greirat - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000720, 1216, 1217, 74000330, 3, $LAYERS(0));
    // Greirat - Toggle Lothric Castle Pillage state
    InitializeCommonEvent(20006020, 70000153, 70000152, $LAYERS(0));
    
    // Irina - Place 1 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000725, 1298, 1295, 1299, $LAYERS(0)); 
    // Irina - Place 2 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000726, 1298, 1295, 1299, $LAYERS(0)); 
    // Irina - Place 3 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000727, 1298, 1295, 1299, $LAYERS(0)); 
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000725, 74000383, 74000384, 0, 1065353216, 90280, 90291, -1, $LAYERS(0));
    // Irina - First meeting situp
    InitializeEvent(0, 14005722, 4000726, 90641, $LAYERS(0));
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000726, 74000386, 74000387, 0, 1065353216, 90280, 90291, -1, $LAYERS(0)); 
    // Irina - Spawn Control and Sitting Animation
    InitializeEvent(0, 14005723, 4000726, 74000381, 1295, 1284, 1282, 1280, 1294, 4000725, 90550, $LAYERS(0)); 
    // Irina - Spawn Control and Sitting Animation
    InitializeEvent(1, 14005723, 4000726, 74000382, 1295, 1285, 1283, 1280, 1294, 4000725, 90550, $LAYERS(0));
    // Irina - Bell Tower treasure - Deep tome
    InitializeCommonEvent(20006030, 4001727, 4000, 2, 61610, 50006162, 50006163, 1286, $LAYERS(0));
    // Irina - Bell Tower Talk Radius
    InitializeCommonEvent(20006031, 74000393, 4002727, $LAYERS(0));
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000727, 74000389, 74000391, 4002728, 0, 90250, 90260, 155, $LAYERS(0));
    // Irina - Sitting Event
    InitializeCommonEvent(20006006, 4000727, 74000390, 74000392, 90610, 90620, 0, 0, $LAYERS(0));
    
    // Yoel - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000730, 1078, 1075, 1079, $LAYERS(0));
    // Yoel - Draw True Strength Event (Player)
    InitializeCommonEvent(20006005, 4000730, 74000430, 74000432, 0, 1075000115, 90250, 90260, 155, $LAYERS(0));
    // Yoel - Draw True Strength Event (NPC)
    InitializeCommonEvent(20006006, 4000730, 74000431, 74000433, 20001, 20002, 1, 1060320051, $LAYERS(0));
    
    // Cornyx - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000735, 1258, 1255, 1259, $LAYERS(0));
    // Cornyx - Set Hostility
    InitializeCommonEvent(20006000, 4000735, 1256, 1257, 74000470, 1059481190, 1255, 1259, 0, $LAYERS(0));
    // Cornyx - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000735, 1256, 1257, 74000470, 3, $LAYERS(0));
    
    // Karla - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000740, 1278, 1275, 1279, $LAYERS(0));
    
    // Orbeck - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000745, 1238, 1235, 1239, $LAYERS(0));
    // Orbeck - Set Hostility
    InitializeCommonEvent(20006000, 4000745, 1236, 1237, 74000580, 1059481190, 1235, 1239, 0, $LAYERS(0));
    // Orbeck - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000745, 1236, 1237, 74000580, 3, $LAYERS(0));

    // Yuria - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000750, 1058, 1055, 1059, $LAYERS(0));
    // Yuria - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000750, 1056, 1057, 74000630, 3, $LAYERS(0));
    // Yuria - 
    InitializeEvent(0, 14000522, 0, $LAYERS(0));
    // Yuria - 
    InitializeEvent(0, 14005521, 4000750, 1056, 1057, 74000630, 1059481190, 1055, 1059, 0, $LAYERS(0));
    // Yuria - 
    InitializeCommonEvent(20006030, 4001750, 4000, 3, 60410, 50006041, 50006042, 1045, $LAYERS(0));
    
    // Eygon - 
    InitializeCommonEvent(20006002, 4000755, 1318, 1315, 1319, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006000, 4000755, 1316, 1317, 74000680, 1059481190, 1315, 1319, 0, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006001, 4000755, 1316, 1317, 74000680, 3, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006002, 4000756, 1318, 1315, 1319, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005541, 4000755, 1316, 1317, 1281, 1284, 1298, 1315, 1319, 1302, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005542, 4000755, 4000756, 4000725, 4000726, 90640, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005543, 4000756, $LAYERS(0));
    
    // Crows - 
    InitializeEvent(0, 14000490, 0, $LAYERS(0));
    // Crows - 
    InitializeEvent(0, 14000491, 0, $LAYERS(0));
    
    // Anri (Male) - 
    InitializeEvent(0, 14005581, 4000765, 4000770, 4000775, 74000730, 74000731, 1059481190, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14000583, 4000765, 4000770, 1356, 1357, 4000775, 1355, 1359, 1342, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14005584, 4000765, 4000770, 1357, 1342, $LAYERS(0));
    // Anri (Male) - 
    InitializeCommonEvent(20006001, 4000765, 1356, 1357, 74000730, 3, $LAYERS(0));
    // Anri (Male) - 
    InitializeCommonEvent(20006002, 4000765, 1358, 1355, 1359, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14005587, 4000765, 1342, 1357, $LAYERS(0));
    
    // Anri (Female) - 
    InitializeCommonEvent(20006001, 4000770, 1356, 1357, 74000730, 3, $LAYERS(0));
    // Anri (Female) - 
    InitializeCommonEvent(20006002, 4000770, 1358, 1355, 1359, $LAYERS(0));
    // Anri (Female) - 
    InitializeEvent(1, 14005587, 4000770, 1342, 1357, $LAYERS(0));
    
    // Horace the Hushed - 
    InitializeCommonEvent(20006001, 4000775, 1496, 1497, 74000731, 3, $LAYERS(0));
    // Horace the Hushed - 
    InitializeCommonEvent(20006002, 4000775, 1498, 1495, 1499, $LAYERS(0));
    // Horace the Hushed - 
    InitializeEvent(0, 14000585, 4000775, 1496, 1497, 4000765, 4000770, 1495, 1499, 1482, $LAYERS(0));
    
    // Hawkwood - 
    InitializeCommonEvent(20006002, 4000760, 1118, 1115, 1119, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006000, 4000760, 1116, 1117, 74000830, 1059481190, 1115, 1119, 0, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006001, 4000760, 1116, 1117, 74000830, 3, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006030, 4001760, 4000, 2, 60730, 50006074, 50006074, 74000825, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006002, 4000761, 1118, 1115, 1119, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006000, 4000761, 1116, 1117, 74000831, 1059481190, 1115, 1119, 0, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006001, 4000761, 1116, 1117, 74000831, 3, $LAYERS(0));
    
    // Sirris - 
    InitializeCommonEvent(20006002, 4000780, 1138, 1135, 1139, $LAYERS(0));
    // Sirris - 
    InitializeCommonEvent(20006030, 4001780, 4000, 1, 60810, 50006081, 50006081, 74000790, $LAYERS(0));
    
    // Leonhard - 
    InitializeCommonEvent(20006002, 4000785, 1158, 1155, 1159, $LAYERS(0));
    // Leonhard - 
    InitializeCommonEvent(20006000, 4000785, 1156, 1157, 74000880, 1059481190, 1155, 1159, 0, $LAYERS(0));
    // Leonhard - 
    InitializeCommonEvent(20006001, 4000785, 1156, 1157, 74000880, 3, $LAYERS(0));
    
    // Unbreakable Patches - 
    InitializeCommonEvent(20006002, 4000791, 1378, 1375, 1379, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeCommonEvent(20006000, 4000791, 1376, 1377, 73500290, 1059481190, 1375, 1379, 0, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeCommonEvent(20006001, 4000791, 1376, 1377, 73500290, 3, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeCommonEvent(20006032, 4000791, 4001790, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeEvent(0, 14000621, 4000790, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeEvent(0, 14000622, 4000790, 4000791, 4004791, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeEvent(0, 14000624, 4000791, $LAYERS(0));
    
    // Cinders Scripts
    InitializeEvent(0, 14000050, 0); 
});

Event(50, Default, function() {
    // Toggle Firelink Floor Hit 
    InitializeEvent(0, 14005103, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Toggle Firelink Floor Hit (Untended Graves)
    InitializeEvent(0, 14005104, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9));
    // Set Event Flag
    InitializeEvent(0, 14005618, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    
    // Fire Keeper - Spawn State
    InitializeEvent(0, 14005600, 4000700, 4002701, 4002703, 4002700, 4002702, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Ludleth - Spawn State
    InitializeEvent(0, 14005640, 4000705, 4001115, 4000706, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Andre - Spawn State
    InitializeEvent(0, 14005660, 4000710, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Shrine Handmaid - Spawn State
    InitializeEvent(0, 14005680, 4000715, 4002715, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Shrine Handmaid (Untended Graves) - Spawn State
    InitializeEvent(0, 14005683, 4000716, 4002715);
    // Irina - Spawn State
    InitializeEvent(0, 14005720, 4000725, 4000726, 4000727, 90550, 90640, 90730, 4004725, 4004726, 4004727, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Yoel - Spawn State
    InitializeEvent(0, 14005740, 4000730, 2160, 4004730, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Cornyx - Spawn State
    InitializeEvent(0, 14005760, 4000735, 4006735, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Karla - Spawn State
    InitializeEvent(0, 14005780, 4000740, 90460, 4001740, 4004740, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Orbeck - Spawn State
    InitializeEvent(0, 14005500, 4000745, 90420, 4001745, 4004745, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Yuria - Spawn State
    InitializeEvent(0, 14005520, 4000750, 90300, 4004750, 4001751);
    // Eygon - Spawn State
    InitializeEvent(0, 14005540, 4000755, 4000756, 90660, 4004755, 4004756, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Hawkwood - Spawn State
    InitializeEvent(0, 14005560, 4000760, 4000761, 4004760, 4004761, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Anri - Spawn State
    InitializeEvent(0, 14005580, 4000765, 4000770, 90750, 90800, 4004765, 4004770, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Horace - Spawn State
    InitializeEvent(0, 14005586, 4000775, 90900, 4004775, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Sirris - Spawn State
    InitializeEvent(0, 14005570, 4000780, 4000781, 4004780, 4004781, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Leonhard - Spawn State
    InitializeEvent(0, 14005750, 4000785, 90710, 4004785, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Patches - Spawn State
    InitializeEvent(0, 14005620, 4000790, 4000791, 4004791, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Set Event Flags
    InitializeEvent(0, 14005701, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Greirat - Spawn State
    InitializeEvent(0, 14005700, 4000720, 4004720, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Set Event Flag 
    InitializeEvent(0, 14000401, 0);
    // Player Start Sequence
    InitializeEvent(0, 14000100, 0, $LAYERS(0, 2, 3, 4, 5, 6, 7, 8, 9));
    
    SetMapSoundState(4004800, Disabled);
    SetMapSoundState(4004801, Disabled);
    SetMapSoundState(4004830, Disabled);
    SetMapSoundState(4004831, Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
    SetMapSoundState(4003700, Disabled);
    SetMapSoundState(4003701, Disabled);
    
    InitializeEvent(0, 14000050, 0); // Cinders Scripts
});

// Cinders Setup
Event(14000050, Restart, function() {
    // One-time Enemies
    InitializeCommonEvent(20008100, 14000604, 4000604, 31000000); // Ravenous Crystal Lizard
    InitializeCommonEvent(20008100, 14000605, 4000605, 31000000); // Ravenous Crystal Lizard
    InitializeCommonEvent(20008100, 14000606, 4000606, 31000000); // Ravenous Crystal Lizard
    InitializeCommonEvent(20008100, 14000862, 4000862, 31000110); // Ravenous Crystal Lizard (Forgotten Key)
    
    // Blacksmith's Nightmare
    InitializeCommonEvent(20090010, 4000890, 4002890, 30310, 63010, 14700, 99005500, 99005501, 14000890, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Setup
    InitializeCommonEvent(20009201, 4000890, 84200, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Kill Taunt
    
    // Ashen Keeper Sofija
    InitializeCommonEvent(20090010, 4000892, 4002892, 30310, 63010, 15400, 99005570, 99005571, 14000892, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Setup
    InitializeCommonEvent(20009201, 4000892, 84200, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Kill Taunt
    
    // El Hueso
    SetCharacterAIState(4000865, Disabled);
    
    // Chests
    InitializeCommonEvent(20005520, 14001605, 4001605, 4004605);
    InitializeCommonEvent(20005520, 14000600, 4001600, 4004600); 
    InitializeCommonEvent(20005520, 14000601, 4001601, 4004601);
    
    // Kiln - 47, 4700500
    // Peak - 53, 5300500
    // Rooftop - 46, 4600500
    // Round Plaza, 54, 5400500
    
    // Curses
    InitializeCommonEvent(20081010, 4005760, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 4005760, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 4005760, 250001402, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 4005760, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 4005760, 250001202, 25000157); // Curse of Frailty
    InitializeCommonEvent(20081000, 4005750, 25000100, $LAYERS(0)); // Curse of Attraction
    InitializeCommonEvent(20081000, 4005750, 25000100, $LAYERS(0, 2, 3, 4, 5, 6, 7, 8, 9)); // Curse of Attraction
    
    // Status Aux
    InitializeCommonEvent(20090200, 4005760, 112610); // Frostbite
    
    // NG+
    InitializeCommonEvent(20008001, 4005775, 1, $LAYERS(0));
    InitializeCommonEvent(20008001, 4005775, 1, $LAYERS(0, 2, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20008001, 4005776, 2, $LAYERS(0));
    InitializeCommonEvent(20008001, 4005776, 2, $LAYERS(0, 2, 3, 4, 5, 6, 7, 8, 9));
    InitializeCommonEvent(20008001, 4005777, 3, $LAYERS(0));
    InitializeCommonEvent(20008001, 4005777, 3, $LAYERS(0, 2, 3, 4, 5, 6, 7, 8, 9));
    
    // Covenants
    InitializeCommonEvent(20081020, 4005760, 160100400, 160100403); // Company of Champions
    
    // Merchants
    InitializeCommonEvent(20081200, 14000742, 4000742, 90850); // Grave Warden Lillian - Idle
    InitializeCommonEvent(20081210, 14000742, 4000742); // Grave Warden Lillian - Hostility
    
    InitializeCommonEvent(20081200, 14000743, 4000743, 90850); // Magnum Ursus - Idle
    InitializeCommonEvent(20081210, 14000743, 4000743); // Magnum Ursus - Hostility
    
    InitializeCommonEvent(20081200, 14000744, 4000744, 90850); // Enchanter Jiji - Idle
    InitializeCommonEvent(20081210, 14000744, 4000744); // Enchanter Jiji - Hostility
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 4000610); // Companion 1
    InitializeCommonEvent(20080000, 4000611); // Companion 2
    InitializeCommonEvent(20080000, 4000612); // Companion 3
    InitializeCommonEvent(20080000, 4000613); // Companion 4
    InitializeCommonEvent(20080000, 4000614); // Companion 5
    InitializeCommonEvent(20080000, 4000615); // Companion 6
    InitializeCommonEvent(20080000, 4000616); // Companion 7
    InitializeCommonEvent(20080000, 4000617); // Companion 8
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 40, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 4000610, 160760000, 160760200, 40, 0); // Companion 1
    InitializeCommonEvent(20080001, 4000611, 160760001, 160760200, 40, 0); // Companion 2
    InitializeCommonEvent(20080001, 4000612, 160760002, 160760200, 40, 0); // Companion 3
    InitializeCommonEvent(20080001, 4000613, 160760003, 160760200, 40, 0); // Companion 4
    InitializeCommonEvent(20080001, 4000614, 160760004, 160760200, 40, 0); // Companion 5
    InitializeCommonEvent(20080001, 4000615, 160760005, 160760200, 40, 0); // Companion 6
    InitializeCommonEvent(20080001, 4000616, 160760006, 160760200, 40, 0); // Companion 7
    InitializeCommonEvent(20080001, 4000617, 160760007, 160760200, 40, 0); // Companion 8
    
    // El Hueso
    InitializeEvent(0, 14000060, 4000865, 14000865); 
    InitializeEvent(0, 14000061, 4000865, 14000865); 
    
    // Trials
    InitializeEvent(0, 14000051, 0);
    InitializeEvent(0, 14000052, 0);
    InitializeEvent(0, 14000053, 0);
    InitializeEvent(0, 14000054, 0);
    
    // Untended Graves
    InitializeEvent(0, 14000055, 0);
});

// Trial of Adversity - Abyss Watchers
Event(14000051, Restart, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 6952);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfActionButtonInArea(AND_01, 40010, 4001143);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001006);
    DisplayEpitaphMessage(15003050);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25001006);
    SetEventFlag(25000060, ON);
    WarpPlayer(53, 0, 5300950);
    SetPlayerRespawnPoint(4002950);
    
    EndUnconditionally(EventEndType.Restart);
});

// Trial of Calamity - Yhorm
Event(14000052, Restart, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 6951);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfActionButtonInArea(AND_01, 40011, 4001144);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001011);
    DisplayEpitaphMessage(15003052);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25001011);
    SetEventFlag(25000061, ON);
    WarpPlayer(46, 0, 4600950);
    SetPlayerRespawnPoint(4002950);
    
    EndUnconditionally(EventEndType.Restart);
});

// Trial of Sorrow - Aldrich
Event(14000053, Restart, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 6952);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfActionButtonInArea(AND_01, 40012, 4001142);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001010);
    DisplayEpitaphMessage(15003051);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25001010);
    SetEventFlag(25000062, ON);
    WarpPlayer(54, 0, 5400950);
    SetPlayerRespawnPoint(4002950);
    
    EndUnconditionally(EventEndType.Restart);
});

// Trial of Devastation - Lothric
Event(14000054, Restart, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 6951);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfActionButtonInArea(AND_01, 40013, 4001141);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 25001018);
    DisplayEpitaphMessage(15003053);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 25001018);
    SetEventFlag(25000063, ON);
    WarpPlayer(47, 0, 4700950);
    SetPlayerRespawnPoint(4002950);
    
    EndUnconditionally(EventEndType.Restart);
});

// Ludleth - Untended Graves Warp
Event(14000055, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14000000); // Firelink Shrine is ON
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 25001013); // Oceiros is killed
    
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, FAIL, AND_01);
    
    Label0();
    IfActionButtonInArea(AND_02, 40014, 4001145);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    SetMapCeremony(40, 0, 10);
    WarpPlayer(40, 0, 4000973);
    SetPlayerRespawnPoint(4002953);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfActionButtonInArea(AND_03, 40014, 4001145);
    IfConditionGroup(MAIN, PASS, AND_03);
    
    DisplayEpitaphMessage(99030112);
    
    GotoUnconditionally(Label.LABEL2);
    
    Label2();
    EndUnconditionally(EventEndType.Restart);
});

// El Hueso
Event(14000060, Default, function(X0_4, X4_4) {
    SetEventFlag(74000910, OFF);
    SetEventFlag(74000915, OFF);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0.2, ComparisonType.Equal, 1);
    
    SetCharacterAIState(X0_4, Enabled);
    SetSpeffect(X0_4, 160740001);
    
    DisplayBossHealthBar(Enabled, X0_4, 0, 204012);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 204012);
});

// El Hueso - Enforce AI state
Event(14000061, Default, function(X0_4, X4_4) {
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.Greater, 0.2, ComparisonType.Equal, 1);
    
    SetCharacterAIState(X0_4, Disabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Player Start Sequence
Event(14000100, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfPlayerInoutMap(EventEndType.End, false, 40, 0);
    
    IfMapCeremonyState(AND_01, Enabled, 40, 0, 0);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    
    SetSpeffect(10000, 4610);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    DeactivateObject(4006440, Disabled);
    PlayOngoingCutsceneAndWarpPlayer(40000040, CutscenePlayMode.Skippable, 4002110, 40, 0, 10000, 1, 0);
    
    WaitFixedTimeFrames(1);
    
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    DeactivateObject(4006440, Enabled);
    IfOngoingCutsceneFinished(MAIN, 40000040);
    SetNetworkInteractionState(Enabled);
    
    WaitFixedTimeFrames(1);
    
    ClearSpeffect(10000, 4610);
    SetPlayerRespawnPoint(4002959);
    SaveRequest(0);
    SetEventFlag(14000100, ON);
    
    //ForceAnimationPlayback(10000, 63000, false, false, false, 0, 1);
});

// Firelink Shrine - Coiled Sword Placement
Event(14005101, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000101);
    
    IfObjectBackread(MAIN, 4001950, true, ComparisonType.Equal, 1);
    
    WaitFixedTimeFrames(1);
    
    ForceAnimationPlayback(4001950, 100000, true, false, false, 0, 1);
    SetEventFlag(74000010, ON);
    
    IfObjectBackread(AND_01, 4001950, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfActionButtonInArea(OR_01, 9351, 4001950);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_01);
    
    IssueShortWarpRequest(10000, TargetEntityType.Object, 4001950, 1);
    ForceAnimationPlayback(4001950, 60430, false, false, false, 0, 1);
    SetBonfireWarpingState(4001950, 60430, Enabled);
    SetEventFlag(74000010, OFF);
    SetEventFlag(14000101, ON);
    RemoveItemFromPlayer(ItemType.Goods, 2137, 1);
});

// Object Toggle in Firelink Shrine (COA and UG)
Event(14005102, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    DeactivateObject(4001101, Disabled);
    DeactivateObject(4001102, Disabled);
    
    IfPlayerStandingOnHit(AND_01, 4004100);
    IfEventFlag(AND_10, OFF, TargetEventFlagType.EventFlag, 131);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 2051);
    IfConditionGroup(OR_10, PASS, AND_01);
    IfConditionGroup(OR_10, PASS, AND_10);
    IfConditionGroup(MAIN, PASS, OR_10);
    
    DeleteObjectfollowingSFX(4001101, true);
    DeleteObjectfollowingSFX(4001102, true);
    DeactivateObject(4001101, Enabled);
    DeactivateObject(4001102, Enabled);
    CreateObjectfollowingSFX(4001101, 101, 840080);
    CreateObjectfollowingSFX(4001102, 101, 4);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 2051);
    IfMultiplayerState(AND_01, MultiplayerState.LeavingSession);
    SkipIfConditionGroupStateCompiled(1, PASS, AND_10);
    IfPlayerStandingOnHit(AND_01, 4004101);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfEventFlag(OR_09, OFF, TargetEventFlagType.EventFlag, 131);
    IfMapCeremonyState(OR_09, Enabled, 40, 0, 10);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_09);
    IfElapsedSeconds(AND_02, 18);
    SkipUnconditionally(1);
    IfElapsedSeconds(AND_02, 20);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_10);
    IfPlayerStandingOnHit(AND_03, 4004100);
    SkipUnconditionally(1);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 2051);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_03);
    
    DeleteObjectfollowingSFX(4001101, true);
    DeleteObjectfollowingSFX(4001102, true);
    
    IfElapsedSeconds(AND_04, 2);
    SkipIfConditionGroupStateCompiled(2, PASS, AND_10);
    IfPlayerStandingOnHit(AND_05, 4004100);
    SkipUnconditionally(1);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 2051);
    IfConditionGroup(OR_02, PASS, AND_04);
    IfConditionGroup(OR_02, PASS, AND_05);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_05);
    
    DeactivateObject(4001101, Disabled);
    DeactivateObject(4001102, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

// Toggle Firelink Floor Hit
Event(14005103, Default, function() {
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 131);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Toggle Firelink Floor Hit (Untended Graves)
Event(14005104, Default, function() {
    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Warp to Flameless Shrine
Event(14005110, Default, function() {
    ActivateHitres(4004100, Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000110);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(74000010, OFF);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9210);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 74000123);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterHPRatio(AND_01, 4000700, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ActivateHitres(4004100, Enabled);
    
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 74000123);
    
    SetEventFlag(74000010, ON);
    
    IfCharacterHPRatio(AND_15, 4000700, ComparisonType.Equal, 0, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_15);
    IfActionButtonInArea(OR_02, 9101, 4001950);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 74000123);
    IfConditionGroup(MAIN, PASS, OR_02);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_15);
    
    Label0();
    DeleteMapSFX(4003500, false);
    DeleteMapSFX(4003501, false);
    DeleteMapSFX(4003502, false);
    DeleteMapSFX(4003503, false);
    DeleteMapSFX(4003504, false);
    SetEventFlag(74000010, OFF);
    SetEventFlag(14000110, ON);
    SetEventFlag(14100000, ON);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1038);
    PlayCutsceneAndWarpPlayer(40000020, CutscenePlayMode.Skippable, 4102100, 41, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneAndWarpPlayer(40000021, CutscenePlayMode.Skippable, 4102100, 41, 0, 10000);
    
    DeleteObjectfollowingSFX(4001500, true);
    DeleteObjectfollowingSFX(4001501, true);
    DeleteObjectfollowingSFX(4001502, true);
    DeleteObjectfollowingSFX(4001503, true);
    DeleteObjectfollowingSFX(4001510, true);
    DeleteObjectfollowingSFX(4001511, true);
    DeleteObjectfollowingSFX(4001512, true);
    DeleteObjectfollowingSFX(4001513, true);
    DeleteObjectfollowingSFX(4001514, true);
    DeleteObjectfollowingSFX(4001515, true);
    DeleteObjectfollowingSFX(4001516, true);
    DeleteObjectfollowingSFX(4001517, true);
    DeleteObjectfollowingSFX(4001518, true);
    DeleteObjectfollowingSFX(4001519, true);
    DeleteObjectfollowingSFX(4001520, true);
    DeleteObjectfollowingSFX(4001521, true);
    DeleteObjectfollowingSFX(4001522, true);
    DeleteObjectfollowingSFX(4001523, true);
    DeleteObjectfollowingSFX(4001524, true);
    DeleteObjectfollowingSFX(4001525, true);
    DeleteObjectfollowingSFX(4001526, true);
    DeleteObjectfollowingSFX(4001527, true);
    DeleteObjectfollowingSFX(4001528, true);
    DeleteObjectfollowingSFX(4001529, true);
    DeleteObjectfollowingSFX(4001530, true);
    DeleteObjectfollowingSFX(4001531, true);
    DeleteObjectfollowingSFX(4001532, true);
    DeleteObjectfollowingSFX(4001533, true);
    DeleteObjectfollowingSFX(4001534, true);
    DeleteObjectfollowingSFX(4001535, true);
    DeleteObjectfollowingSFX(4001536, true);
    DeleteObjectfollowingSFX(4001537, true);
    DeleteObjectfollowingSFX(4001538, true);
    DeleteObjectfollowingSFX(4001539, true);
    DeleteObjectfollowingSFX(4001540, true);
    DeleteObjectfollowingSFX(4001541, true);
    DeleteObjectfollowingSFX(4001542, true);
    DeleteObjectfollowingSFX(4001543, true);
    DeleteObjectfollowingSFX(4001544, true);
    DeleteObjectfollowingSFX(4001545, true);
    DeleteObjectfollowingSFX(4001546, true);
    DeleteObjectfollowingSFX(4001547, true);
    DeleteObjectfollowingSFX(4001548, true);
    DeleteObjectfollowingSFX(4001549, true);
    DeleteObjectfollowingSFX(4001550, true);
    DeleteObjectfollowingSFX(4001551, true);
    DeleteObjectfollowingSFX(4001552, true);
    DeleteObjectfollowingSFX(4001553, true);
    DeleteObjectfollowingSFX(4001554, true);
    DeleteObjectfollowingSFX(4001555, true);
    DeleteObjectfollowingSFX(4001556, true);
    DeleteObjectfollowingSFX(4001557, true);
    DeleteObjectfollowingSFX(4001558, true);
    DeleteObjectfollowingSFX(4001559, true);
    DeleteObjectfollowingSFX(4001560, true);
    DeleteObjectfollowingSFX(4001561, true);
    DeleteObjectfollowingSFX(4001562, true);
    DeleteObjectfollowingSFX(4001563, true);
    DeleteObjectfollowingSFX(4001564, true);
    DeleteObjectfollowingSFX(4001565, true);
    DeleteObjectfollowingSFX(4001566, true);
    DeleteObjectfollowingSFX(4001567, true);
    DeleteObjectfollowingSFX(4001568, true);
    DeleteObjectfollowingSFX(4001569, true);
    SetPlayerRespawnPoint(4102100);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
});

// Check Lords of Cinder completion
Event(14000120, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X16_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(X0_4, ON);
});

// Handle Lord of Cinder placement
Event(14000121, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X0_4);
    
    DeleteObjectfollowingSFX(X8_4, false);
    CreateObjectfollowingSFX(X8_4, 201, 840066);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    DeactivateObject(X8_4, Disabled);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 2051);
    IfMultiplayerState(AND_01, MultiplayerState.LeavingSession);
    IfPlayerHasdoesntHaveItem(AND_01, ItemType.Goods, X4_4, OwnershipState.Owns);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfActionButtonInArea(AND_01, X16_4, X12_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    RotateCharacter(10000, X12_4, X20_4, true);
    SkipIfComparison(2, ComparisonType.Equal, X20_4, 69050);
    
    WaitFixedTimeSeconds(0.9);
    
    SkipUnconditionally(1);
    WaitFixedTimeSeconds(2);
    
    SetEventFlag(X0_4, ON);
    RemoveItemFromPlayer(ItemType.Goods, X4_4, 1);
    DeactivateObject(X8_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Object, X8_4, 201, 840065);
    CreateObjectfollowingSFX(X8_4, 201, 840066);
});

// Ashen Estus Flask - Handle Pickup
Event(14000130, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 6010);
    
    CreateObjectfollowingSFX(4001200, 90, 63);
    
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfActionButtonInArea(AND_01, 9355, 4001200);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ForceAnimationPlayback(10000, 60070, false, false, false, 0, 1);
    
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 6030);
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 6029);
    GotoIfEventFlag(Label.LABEL8, ON, TargetEventFlagType.EventFlag, 6028);
    GotoIfEventFlag(Label.LABEL7, ON, TargetEventFlagType.EventFlag, 6027);
    GotoIfEventFlag(Label.LABEL6, ON, TargetEventFlagType.EventFlag, 6026);
    GotoIfEventFlag(Label.LABEL5, ON, TargetEventFlagType.EventFlag, 6025);
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 6024);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 6023);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 6022);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 6021);
    
    AwardItemLot(4000505);
    GotoUnconditionally(Label.LABEL0);
    
    Label1();
    AwardItemLot(4000515);
    GotoUnconditionally(Label.LABEL0);
    
    Label2();
    AwardItemLot(4000525);
    GotoUnconditionally(Label.LABEL0);
    
    Label3();
    AwardItemLot(4000535);
    GotoUnconditionally(Label.LABEL0);
    
    Label4();
    AwardItemLot(4000545);
    GotoUnconditionally(Label.LABEL0);
    
    Label5();
    AwardItemLot(4000555);
    GotoUnconditionally(Label.LABEL0);
    
    Label6();
    AwardItemLot(4000565);
    GotoUnconditionally(Label.LABEL0);
    
    Label7();
    AwardItemLot(4000575);
    GotoUnconditionally(Label.LABEL0);
    
    Label8();
    AwardItemLot(4000585);
    GotoUnconditionally(Label.LABEL0);
    
    Label9();
    AwardItemLot(4000595);
    GotoUnconditionally(Label.LABEL0);
    
    Label10();
    AwardItemLot(4000605);
    GotoUnconditionally(Label.LABEL0);
    
    Label0();
    DeleteObjectfollowingSFX(4001200, true);
    SetEventFlag(6010, ON);
});

// Cathedral Grave Warden - Set Home
Event(14005300, Restart, function(X0_4, X4_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterAIState(MAIN, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    Label0();
    SetCharacterHome(X0_4, X4_4);
});

// Unknown
Event(14000401, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetEventFlag(14000400, ON);
    EndUnconditionally(EventEndType.End);
});

// Setup Bell Tower Lift
Event(14005401, Restart, function() {
    InitializeCommonEvent(20005621, 14000400, 14001400, 4001400, 4001401, 4003401, 4001402, 4003402, 4002401, 4002402, 14001401, 14004400, 0);
});

// Setup Ladders
Event(14005420, Restart, function() {
    RegisterLadder(14000420, 14000421, 4001420);
});

// Firelink Shrine - Place Sword
Event(14005440, Restart, function() {
    IfObjectBackread(MAIN, 4001955, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4001955, 100000, false, false, false, 0, 1);
});

// Setup Light Sources
Event(14005441, Restart, function() {
    DeleteObjectfollowingSFX(4001500, false);
    DeleteObjectfollowingSFX(4001501, false);
    DeleteObjectfollowingSFX(4001502, false);
    DeleteObjectfollowingSFX(4001503, false);
    DeleteObjectfollowingSFX(4001510, false);
    DeleteObjectfollowingSFX(4001511, false);
    DeleteObjectfollowingSFX(4001512, false);
    DeleteObjectfollowingSFX(4001513, false);
    DeleteObjectfollowingSFX(4001514, false);
    DeleteObjectfollowingSFX(4001515, false);
    DeleteObjectfollowingSFX(4001516, false);
    DeleteObjectfollowingSFX(4001517, false);
    DeleteObjectfollowingSFX(4001518, false);
    DeleteObjectfollowingSFX(4001519, false);
    DeleteObjectfollowingSFX(4001520, false);
    DeleteObjectfollowingSFX(4001521, false);
    DeleteObjectfollowingSFX(4001522, false);
    DeleteObjectfollowingSFX(4001523, false);
    DeleteObjectfollowingSFX(4001524, false);
    DeleteObjectfollowingSFX(4001525, false);
    DeleteObjectfollowingSFX(4001526, false);
    DeleteObjectfollowingSFX(4001527, false);
    DeleteObjectfollowingSFX(4001528, false);
    DeleteObjectfollowingSFX(4001529, false);
    DeleteObjectfollowingSFX(4001530, false);
    DeleteObjectfollowingSFX(4001531, false);
    DeleteObjectfollowingSFX(4001532, false);
    DeleteObjectfollowingSFX(4001533, false);
    DeleteObjectfollowingSFX(4001534, false);
    DeleteObjectfollowingSFX(4001535, false);
    DeleteObjectfollowingSFX(4001536, false);
    DeleteObjectfollowingSFX(4001537, false);
    DeleteObjectfollowingSFX(4001538, false);
    DeleteObjectfollowingSFX(4001539, false);
    DeleteObjectfollowingSFX(4001540, false);
    DeleteObjectfollowingSFX(4001541, false);
    DeleteObjectfollowingSFX(4001542, false);
    DeleteObjectfollowingSFX(4001543, false);
    DeleteObjectfollowingSFX(4001544, false);
    DeleteObjectfollowingSFX(4001545, false);
    DeleteObjectfollowingSFX(4001546, false);
    DeleteObjectfollowingSFX(4001547, false);
    DeleteObjectfollowingSFX(4001548, false);
    DeleteObjectfollowingSFX(4001549, false);
    DeleteObjectfollowingSFX(4001550, false);
    DeleteObjectfollowingSFX(4001551, false);
    DeleteObjectfollowingSFX(4001552, false);
    DeleteObjectfollowingSFX(4001553, false);
    DeleteObjectfollowingSFX(4001554, false);
    DeleteObjectfollowingSFX(4001555, false);
    DeleteObjectfollowingSFX(4001556, false);
    DeleteObjectfollowingSFX(4001557, false);
    DeleteObjectfollowingSFX(4001558, false);
    DeleteObjectfollowingSFX(4001559, false);
    DeleteObjectfollowingSFX(4001560, false);
    DeleteObjectfollowingSFX(4001561, false);
    DeleteObjectfollowingSFX(4001562, false);
    DeleteObjectfollowingSFX(4001563, false);
    DeleteObjectfollowingSFX(4001564, false);
    DeleteObjectfollowingSFX(4001565, false);
    DeleteObjectfollowingSFX(4001566, false);
    DeleteObjectfollowingSFX(4001567, false);
    DeleteObjectfollowingSFX(4001568, false);
    DeleteObjectfollowingSFX(4001569, false);
    CreateObjectfollowingSFX(4001500, 200, 800022);
    CreateObjectfollowingSFX(4001501, 200, 800022);
    CreateObjectfollowingSFX(4001502, 200, 800022);
    CreateObjectfollowingSFX(4001503, 200, 800022);
    CreateObjectfollowingSFX(4001510, 200, 839010);
    CreateObjectfollowingSFX(4001511, 200, 839010);
    CreateObjectfollowingSFX(4001512, 200, 839010);
    CreateObjectfollowingSFX(4001513, 200, 839010);
    CreateObjectfollowingSFX(4001514, 200, 839010);
    CreateObjectfollowingSFX(4001515, 200, 839010);
    CreateObjectfollowingSFX(4001516, 200, 839010);
    CreateObjectfollowingSFX(4001517, 200, 839010);
    CreateObjectfollowingSFX(4001518, 200, 839010);
    CreateObjectfollowingSFX(4001519, 200, 839010);
    CreateObjectfollowingSFX(4001520, 200, 839010);
    CreateObjectfollowingSFX(4001521, 200, 839010);
    CreateObjectfollowingSFX(4001522, 200, 839010);
    CreateObjectfollowingSFX(4001523, 200, 839010);
    CreateObjectfollowingSFX(4001524, 200, 839010);
    CreateObjectfollowingSFX(4001525, 200, 839010);
    CreateObjectfollowingSFX(4001526, 200, 839010);
    CreateObjectfollowingSFX(4001527, 200, 839010);
    CreateObjectfollowingSFX(4001528, 200, 839010);
    CreateObjectfollowingSFX(4001529, 200, 839010);
    CreateObjectfollowingSFX(4001530, 200, 839010);
    CreateObjectfollowingSFX(4001531, 200, 839010);
    CreateObjectfollowingSFX(4001532, 200, 839010);
    CreateObjectfollowingSFX(4001533, 200, 839010);
    CreateObjectfollowingSFX(4001534, 200, 839010);
    CreateObjectfollowingSFX(4001535, 200, 839010);
    CreateObjectfollowingSFX(4001536, 200, 839010);
    CreateObjectfollowingSFX(4001537, 200, 839010);
    CreateObjectfollowingSFX(4001538, 200, 839010);
    CreateObjectfollowingSFX(4001539, 200, 839010);
    CreateObjectfollowingSFX(4001540, 200, 839010);
    CreateObjectfollowingSFX(4001541, 200, 839010);
    CreateObjectfollowingSFX(4001542, 200, 839010);
    CreateObjectfollowingSFX(4001543, 200, 839010);
    CreateObjectfollowingSFX(4001544, 200, 839010);
    CreateObjectfollowingSFX(4001545, 200, 839010);
    CreateObjectfollowingSFX(4001546, 200, 839010);
    CreateObjectfollowingSFX(4001547, 200, 839010);
    CreateObjectfollowingSFX(4001548, 200, 839010);
    CreateObjectfollowingSFX(4001549, 200, 839010);
    CreateObjectfollowingSFX(4001550, 200, 839010);
    CreateObjectfollowingSFX(4001551, 200, 839010);
    CreateObjectfollowingSFX(4001552, 200, 839010);
    CreateObjectfollowingSFX(4001553, 200, 839010);
    CreateObjectfollowingSFX(4001554, 200, 839010);
    CreateObjectfollowingSFX(4001555, 200, 839010);
    CreateObjectfollowingSFX(4001556, 200, 839010);
    CreateObjectfollowingSFX(4001557, 200, 839010);
    CreateObjectfollowingSFX(4001558, 200, 839010);
    CreateObjectfollowingSFX(4001559, 200, 839010);
    CreateObjectfollowingSFX(4001560, 200, 839010);
    CreateObjectfollowingSFX(4001561, 200, 839010);
    CreateObjectfollowingSFX(4001562, 200, 839010);
    CreateObjectfollowingSFX(4001563, 200, 839010);
    CreateObjectfollowingSFX(4001564, 200, 839010);
    CreateObjectfollowingSFX(4001565, 200, 839010);
    CreateObjectfollowingSFX(4001566, 200, 839010);
    CreateObjectfollowingSFX(4001567, 200, 839010);
    CreateObjectfollowingSFX(4001568, 200, 839010);
    CreateObjectfollowingSFX(4001569, 200, 839010);
});

// Disable Bell Tower (Bottom) Door
Event(14005442, Restart, function() {
    SetObjactState(4001252, -1, Disabled);
});

// Toggle Message Visbility
Event(14005445, Restart, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 131);
    
    SetVisibilityOfMessage(4004222, Disabled);
});

// Firelink Shrine Music
Event(14005450, Default, function() {
    SetNetworkSyncState(Disabled);
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);
    
    WaitFixedTimeSeconds(0.5);
    
    IfPlayerStandingOnHit(OR_01, 4004100);
    IfPlayerStandingOnHit(OR_01, 4004101);
    IfPlayerStandingOnHit(OR_01, 4004102);
    IfPlayerStandingOnHit(OR_01, 4004103);
    IfPlayerStandingOnHit(OR_01, 4004104);
    IfPlayerStandingOnHit(OR_01, 4004109);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 74000122);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 50006020);
    EnableMapSoundWithFade(4004450, Enabled, 5);
    SkipUnconditionally(1);
    EnableMapSoundWithFade(4004460, Enabled, 5);
    
    WaitFixedTimeSeconds(0.5);
    
    IfPlayerStandingOnHit(OR_02, 4004100);
    IfPlayerStandingOnHit(OR_02, 4004101);
    IfPlayerStandingOnHit(OR_02, 4004102);
    IfPlayerStandingOnHit(OR_02, 4004103);
    IfPlayerStandingOnHit(OR_02, 4004104);
    IfPlayerStandingOnHit(OR_02, 4004109);
    IfConditionGroup(OR_03, FAIL, OR_02);
    IfEventFlag(AND_02, CHANGE, TargetEventFlagType.EventFlag, 50006020);
    IfConditionGroup(OR_03, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_03);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, FAIL, AND_02);
    
    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Disable Map Sound States
Event(1405451, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
});

// Giant Tree Seed Drop
Event(14005460, Default, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 9400);
    
    IfActionButtonInArea(MAIN, 9350, 4001460);
    RotateCharacter(10000, 4001460, 60070, true);
    AwardItemLot(4000);
    SetEventFlag(9400, OFF);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
    
    // 
    Label0();
    IfActionButtonInArea(MAIN, 9350, 4001460);
    DisplayGenericDialog(10012010, PromptType.OKCANCEL, NumberofOptions.OneButton, 4001460, 3);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Way of White Circlet Apperance
Event(14005461, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    DeleteObjectfollowingSFX(4001461, true);
    
    IfPlayerHasdoesntHaveItem(OR_01, ItemType.Goods, 119, OwnershipState.Owns);
    IfMultiplayerNetworkPenalized(OR_01);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_01);
    
    CreateObjectfollowingSFX(4001461, 90, 62);
    
    IfActionButtonInArea(MAIN, 4000, 4001461);
    RotateCharacter(10000, 4001461, 60070, true);
    AwardItemLot(4020);
    DeleteObjectfollowingSFX(4001461, true);
});

// Lothric Warp notification
Event(14005470, Default, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerStandingOnHit(AND_01, 4004120);
    IfConditionGroup(AND_02, FAIL, AND_01);
    IfPlayerInoutMap(AND_02, true, 40, 0);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 743);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_03);
    
    // 
    Label0();
    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(4010);
    SetEventFlag(743, OFF);
});

// Area Welcome Message - Disable
Event(14005471, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 74000013);
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfPlayerStandingOnHit(OR_01, 4004120);
    IfConditionGroup(AND_01, FAIL, OR_01);
    IfCharacterDeadalive(AND_01, 10000, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetAreaWelcomeMessageState(Disabled);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Area Welcome Message - Enable
Event(14005472, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfCharacterDeadalive(AND_01, 10000, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WaitFixedTimeFrames(1);
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
Event(14005473, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfCharacterHasSpeffect(AND_01, 10000, 3220, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
Event(14005474, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    IfPlayerInoutMap(AND_01, true, 40, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000013);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Advance Journey (NG+)
Event(14005480, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X0_4, OFF);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    
    SetEventFlag(X0_4, OFF);
    DisableLoadingScreenTips(true);
    SetEventFlag(30, ON);
    
    RemoveItemFromPlayer(ItemType.Goods, 5000, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5001, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5002, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5003, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5004, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5005, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5006, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5007, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5008, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5009, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5010, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5011, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5012, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5013, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5014, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5015, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5016, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5017, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5018, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5019, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5020, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5021, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5022, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5023, 99);
    RemoveItemFromPlayer(ItemType.Goods, 5024, 99);
});

// Disable Loading Tips in Cemetery of Ash
Event(14005481, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfPlayerInoutMap(MAIN, true, 40, 0);
    DisableLoadingScreenTips(false);
});

// Throne Back messages (Unused)
Event(14005484, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    
    IfActionButtonInArea(MAIN, 9356, X4_4);
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Crows - 
Event(14000490, Default, function() {
    InitializeCrowTradeArea(4002796);
    InitializeCrowTradeArea(4002797);
    
    SetEventFlag(2040, OFF);
    SetEventFlag(2041, OFF);
    SetEventFlag(2042, OFF);
    SetEventFlag(74000990, OFF);
});

// Crows -  
Event(14000491, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(74000995, OFF);
    
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 4002795, 1);
    SetEventFlag(74000995, ON);
    WaitFixedTimeSeconds(1);
    
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 4002795, 1);
    SetEventFlag(74000995, OFF);
    WaitFixedTimeSeconds(1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Gundyr - Kill
Event(14005800, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000800);
   
    IfCharacterHPRatio(MAIN, 4000800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    WaitFixedTimeSeconds(1);
    
    PlaySE(4000800, SoundType.s_SFX, 777777777);
    
    WaitFixedTimeSeconds(4);
    
    HandleBossDefeat(4000800);
    SetEventFlag(14000800, ON);
    SetEventFlag(9319, ON);
    SetEventFlag(6319, ON);
    
    InitializeCommonEvent(20020000, 0); // Boss Kill
});

// Corrupted Gundyr - Setup
Event(14005810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14000800);
    ForceCharacterDeath(4000800, false);
    ChangeCharacterEnableState(4000800, Disabled);
    SetCharacterAnimationState(4000800, Disabled);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    SetCharacterAIState(4000800, Disabled);
    SetCharacterHPBarDisplay(4000800, Disabled);
    SetCharacterInvincibility(4000800, Enabled);
    SetLockOnPoint(4000800, 221, Disabled);
    ForceAnimationPlayback(4000800, 30002, true, false, false, 0, 1);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14000802);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 14000802);
    GotoUnconditionally(Label.LABEL2);
    
    //
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14005805);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4002800, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4002810, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    ForceAnimationPlayback(4000800, 20002, false, false, false, 0, 1);
    
    // 
    Label2();
    SetCharacterInvincibility(4000800, Disabled);
    ChangeCharacterHitmask(4000800, 0, ON);
    
    IfCharacterHasEventMessage(OR_01, 4000800, 40, true, ComparisonType.Equal, 1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    ForceAnimationPlayback(4000800, 1500, false, false, false, 0, 1);
    
    IfCharacterHasEventMessage(AND_02, 4000800, 10, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    SetCharacterAIState(4000800, Enabled);
    SetSpeffect(4000800, 5800);
    SetCharacterHPBarDisplay(4000800, Enabled);
    SetNetworkUpdateRate(4000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 4000800, 0, 905110);
    SetEventFlag(14000801, ON);
    SetSpeffect(4000800, 5404);
    
    InitializeCommonEvent(20020100, 0); // Boss Start
    InitializeEvent(0, 14000070, 4000930); // Dark Tears
    
    EndUnconditionally(EventEndType.End);
});

// Corrupted Gundyr - Handle Start State
Event(14005811, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000800);
    
    SetNetworkconnectedEventFlag(14000801, ON);
    SetNetworkconnectedEventFlag(14000802, ON);
    
    IfCharacterBackreadStatus(MAIN, 4000800, true, ComparisonType.Equal, 1);
    ChangeCharacterDispmask(4000800, 0, ON);
    ChangeCharacterDispmask(4000800, 2, OFF);
    ChangeCharacterDispmask(4000800, 3, ON);
    ChangeCharacterDispmask(4000800, 4, ON);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14000802);
    IfActionButtonInArea(OR_01, 8900, 4000800);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000802);
    
    IssueShortWarpRequest(10000, TargetEntityType.Character, 4000800, 100);
    ForceAnimationPlayback(10000, 60750, false, false, false, 0, 1);
    ForceAnimationPlayback(4000800, 20003, false, false, false, 0, 1);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14000802);
    IfCharacterHasEventMessage(OR_01, 4000800, 20, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(14000802, ON);
});


// Corrupted Gundyr - Dark Tears
Event(14000070, Restart, function(X0_4) {
    InitializeEvent(0, 14000071, 4000930); // 90%
    InitializeEvent(0, 14000072, 4000930); // 60%
    InitializeEvent(0, 14000073, 4000930); // 30%
});

// 90%
Event(14000071, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000800);
    
    IfCharacterHPRatio(MAIN, 4000800, ComparisonType.LessOrEqual, 0.9, ComparisonType.Equal, 1);
    
    CreateBulletOwner(X0_4);
    
    ShootBullet(X0_4, 4002960, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002961, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002962, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002963, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002964, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002965, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002966, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002967, -1, 251100910, 0, 0, 0);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Gundyr - Dark Tears - 60%
Event(14000072, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000800);
    
    IfCharacterHPRatio(MAIN, 4000800, ComparisonType.LessOrEqual, 0.6, ComparisonType.Equal, 1);
    
    CreateBulletOwner(X0_4);
    
    ShootBullet(X0_4, 4002950, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002951, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002952, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002953, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002954, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002955, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002956, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002957, -1, 251100910, 0, 0, 0);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Gundyr - Dark Tears - 30%
Event(14000073, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000800);
    
    IfCharacterHPRatio(MAIN, 4000800, ComparisonType.LessOrEqual, 0.3, ComparisonType.Equal, 1);
    
    CreateBulletOwner(X0_4);
    
    ShootBullet(X0_4, 4002940, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002941, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002942, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002943, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002944, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002945, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002946, -1, 251100910, 0, 0, 0);
    ShootBullet(X0_4, 4002947, -1, 251100910, 0, 0, 0);
    
    WaitFixedTimeSeconds(3);
    
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Gundyr - Handle Lock-on State
Event(14005812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000800);
    
    IfCharacterHasEventMessage(MAIN, 4000800, 10, true, ComparisonType.Equal, 1);
    
    ChangeCharacterHitmask(4000800, 0, OFF);
    SetLockOnPoint(4000800, 221, Enabled);
    SetEventFlag(14005802, ON);
});

// Corrupted Gundyr - Handle Camera State
Event(14005813, Restart, function() {
    SetNetworkSyncState(Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000800);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14005805);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14005802);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    WaitFixedTimeSeconds(1.5);
    ChangeCamera(5110, 5110);
    
    IfCharacterHPRatio(MAIN, 4000800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    ChangeCamera(-1, -1);
});

// Corrupted Gundyr - Door
Event(14000816, Restart, function() {
    SetObjactState(4001260, -1, Disabled);
    SetObjactState(4001261, -1, Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 64000260);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 14000800);
    SetObjactState(4001260, 400005, Enabled);
});

// Corrupted Gundyr - Fogwall Handler
Event(14005820, Restart, function() {
    // Fogwall - Cemetery Side
    InitializeCommonEvent(20005800, 14000800, 4001800, 4002800, 14005805, 4001800, 4000800, 14000801, 4002800);
    InitializeCommonEvent(20005801, 14000800, 4001800, 4002800, 14005805, 4001800, 14005822);
    InitializeCommonEvent(20005820, 14000800, 4001800, 3, 14000801);
    
    // Fogwall - Firelink Side
    InitializeCommonEvent(20005800, 14000800, 4001810, 4002810, 14005805, 4001800, 4000800, 14000801, 4002810);
    InitializeCommonEvent(20005801, 14000800, 4001810, 4002810, 14005805, 4001800, 14005822);
    InitializeCommonEvent(20005820, 14000800, 4001810, 3, 14000801);
    
    InitializeCommonEvent(20005831, 14000800, 14005805, 14005822, 4002800, 4004800, 4004801, 14005802);
    InitializeCommonEvent(20005831, 14000800, 14005805, 14005822, 4002810, 4004800, 4004801, 14005802);
});

// Champion Gundyr Kill
Event(14005830, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000830);
    
    IfCharacterHPRatio(MAIN, 4000830, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(1);
    
    PlaySE(4000830, SoundType.s_SFX, 777777777);
    
    IfCharacterDeadalive(MAIN, 4000830, DeathState.Dead, ComparisonType.Equal, 1);
    
    HandleBossDefeat(4000830);
    SetEventFlag(14000830, ON);
    SetEventFlag(9320, ON);
    SetEventFlag(6320, ON);
    ChangeCamera(-1, -1);
    
    InitializeCommonEvent(20020016, 0); // Boss Kill
});

// Champion Gundyr - Setup Boss
Event(14005840, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14000830);
    
    ForceCharacterDeath(4000830, false);
    SetCharacterAnimationState(4000830, Disabled);
    ChangeCharacterEnableState(4000830, Disabled);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    SetCharacterInvincibility(4000830, Enabled);
    SetCharacterAIState(4000830, Disabled);
    SetLockOnPoint(4000830, 221, Disabled);
    ChangeCharacterHitmask(4000830, 0, ON);
    ForceAnimationPlayback(4000830, 30002, true, false, false, 0, 1);
    
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14000831);
    
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002831, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoUnconditionally(Label.LABEL2);
    
    //
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14005835);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    //
    Label2();
    ForceAnimationPlayback(4000830, 20002, false, false, false, 0, 1);
    SetCharacterAIState(4000830, Enabled);
    SetCharacterImmortality(4000830, Disabled);
    SetCharacterInvincibility(4000830, Disabled);
    SetNetworkUpdateRate(4000830, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 4000830, 0, 905115);
    SetEventFlag(14000831, ON);
    InitializeCommonEvent(20020116, 0); // Boss Start
});

// Champion Gundur - Phase Change
Event(14005841, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000830);
    
    IfCharacterHPRatio(MAIN, 4000830, ComparisonType.LessOrEqual, 0.5, ComparisonType.Equal, 1);
    SetEventFlag(14005832, ON);
});

// Champion Gundyr door
Event(14000842, Restart, function() {
    WaitFixedTimeFrames(1);
    
    SetObjactState(4001260, -1, Disabled);
    SetObjactState(4001261, -1, Disabled);
    
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 64000261);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 14000830);
    SetObjactState(4001261, 400005, Enabled);
});

// Champion Gundyr - Fog Wall Handler
Event(14000859, Restart, function() {
    // Fogwall - Cemetery Side
    InitializeCommonEvent(20005800, 14000830, 4001800, 4002800, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001800, 4002800, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001800, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001800, 4002800, 10000);
    
    // Fogwall - Firelink Side
    InitializeCommonEvent(20005800, 14000830, 4001810, 4002810, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001810, 4002810, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001810, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001810, 4002810, 10000);
    
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 14000831);
    InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002800, 4004830, 4004831, 14005832);
    InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002810, 4004830, 4004831, 14005832);
    EndUnconditionally(EventEndType.End);
    
    InitializeCommonEvent(20001836, 14000830, 14005835, 14005836, 14000831, 4004830, 4004831, 14005832);
});

// Orbeck - Spawn State
Event(14005500, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1235, 1239);
    BatchSetNetworkconnectedEventFlags(1235, 1239, OFF);
    SetNetworkconnectedEventFlag(1235, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1236);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000063);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1235, 1239, OFF);
    SetNetworkconnectedEventFlag(1235, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1220, 1234);
    BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
    SetNetworkconnectedEventFlag(1220, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1235);
    
    //IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1221);
    //IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 74000553); // Bosses killed without giving scroll
    
    //SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    //BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
    //SetNetworkconnectedEventFlag(1222, ON);
    
    //IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1221);
    //IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000583); // Purchased all spells
    
    //SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    //BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
    //SetNetworkconnectedEventFlag(1223, ON);
    
    // Sin State
    Label9();
    SetEventFlag(70000063, OFF);
    SetEventFlag(74000551, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1235);
    SetEventFlag(74000570, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1221);
    GotoIfBatchEventFlags(Label.LABEL3, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1222, 1234);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X8_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1236);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1238);
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label3();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
});

// Yuria - Spawn State
Event(14005520, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1055, 1059);
    BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
    SetNetworkconnectedEventFlag(1055, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1056); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000054); // Sinned
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
    SetNetworkconnectedEventFlag(1055, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1040, 1054);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1040, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1055);
    
    // 
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 700); // Initial flag setup
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1040); // "Dead"
    IfPlayerRemainingYoelLevelCount(AND_02, ComparisonType.LessOrEqual, 0);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 74000124); // Healed Dark Sigils
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1041, ON);
    
    //
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1041);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 50006193);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1042, ON);
    
    //
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 1042);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 74000640); // Summoned as Phantom
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_09);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1045, ON);
    
    // Yoel Killed, Dark Sigils Healed -> Leave
    IfBatchEventFlags(AND_04, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1040, 1042);
    IfPlayerRemainingYoelLevelCount(AND_05, ComparisonType.Greater, 0);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1078); // Yoel "Killed"
    IfConditionGroup(OR_04, PASS, AND_05);
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 74000124); // Healed Dark Sigils
    IfConditionGroup(AND_04, PASS, OR_04);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
    
    // Anri Killed -> Leave
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1041);
    IfBatchEventFlags(AND_06, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1340, 1347);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1358);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
     
    //
    IfBatchEventFlags(AND_07, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1561);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1578);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1043, ON);
    
    // 
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1043);
    IfEventFlag(OR_08, ON, TargetEventFlagType.EventFlag, 74000619);
    IfEventFlag(OR_08, OFF, TargetEventFlagType.EventFlag, 74000600);
    IfConditionGroup(AND_08, PASS, OR_08);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_08);
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
    
    // 
    Label9();
    SetEventFlag(70000054, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1055);
    SetEventFlag(74000620, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1041);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1042);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1043);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1044);
    //GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1044);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X12_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    DeactivateObject(X12_4, Disabled);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1056);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1058);
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetObjectTreasureState(X12_4, Enabled);
    EndUnconditionally(EventEndType.End);
});

// Yuria -
Event(14005521, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X12_4, OFF);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfDamageType(AND_02, X0_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Less, X16_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1041);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 1043);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    
    GotoIfComparison(Label.LABEL0, ComparisonType.Equal, 1, X28_4);
    
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    
    GotoUnconditionally(Label.LABEL9);
    
    // 
    Label0();
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    
    //
    Label9();
    SaveRequest(0);
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(AND_03, X0_4, 159, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Yuria - 
Event(14000522, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1055);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1041, 1042);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000124);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1043, ON);
    SetNetworkconnectedEventFlag(74000630, OFF);
    SaveRequest(0);
});

// Eygon - Spawn State
Event(14005540, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1315, 1319);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1315, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1316);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000067);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1315, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1300, 1314);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1300, ON);
    
    GotoIfEventFlag(Label.LABEL10, OFF, TargetEventFlagType.EventFlag, 1315);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1300);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73100304);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1301, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1301);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9307);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1302, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1302);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000650);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1303, ON);
    
    IfBatchEventFlags(AND_06, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1301, 1303);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1298);
    
    SkipIfConditionGroupStateUncompiled(5, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1302, ON);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1317, ON);
    GotoUnconditionally(Label.LABEL9);
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1303);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 9308);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000380);
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1305, ON);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1318, ON);
    
    // 
    Label9();
    SetEventFlag(70000067, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1315);
    SetEventFlag(74000670, OFF);
    
    // 
    Label10();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X16_4, -1, X4_4);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1302);
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 1304);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1316);
    GotoIfEventFlag(Label.LABEL17, ON, TargetEventFlagType.EventFlag, 1317);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1318);
    ForceAnimationPlayback(X0_4, X8_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label16();
    Label17();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label4();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1318);
    SetCharacterAIState(X4_4, Disabled);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

// Eygon -
Event(14005541, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X32_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X24_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, X12_4, X16_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X24_4, X28_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    SaveRequest(0);
    
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(OR_15, X0_4, 159, true, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, FAIL, OR_15);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Eygon -
Event(14005542, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1301, 1303);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1315);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1282, 1283);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1295);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000351);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
    SetNetworkconnectedEventFlag(1304, ON);
    BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
    SetNetworkconnectedEventFlag(1317, ON);
    
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 1282);
    
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1284, ON);
    GotoUnconditionally(Label.LABEL1);
    
    //
    Label0();
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1285, ON);
    
    //
    Label1();
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    SetCharacterAIState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Enabled);
    SetCharacterBackreadState(X12_4, false);
    SetCharacterTeamType(X12_4, TeamType.Disabled);
    ForceAnimationPlayback(X12_4, X16_4, true, false, false, 0, 1);
});

// Eygon - 
Event(14005543, Default, function(X0_4) {
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1304);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1318);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, X0_4, 10000, 10, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfDamageType(OR_01, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(OR_02, X0_4, 159, true, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_02, X0_4, AIStateType.Normal, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, OR_02);
    RotateCharacter(X0_4, 10000, -1, true);
});

// Hawkwood - Spawn State
Event(14005560, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetCharacterAnimationState(4000762, Disabled);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1115, 1119);
    BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
    SetNetworkconnectedEventFlag(1115, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1116);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000057);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
    SetNetworkconnectedEventFlag(1115, ON);
    BatchSetEventFlags(74000848, 74000849, OFF);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1100, 1114);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1100, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1115);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1100);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9303);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 9306);
    IfConditionGroup(AND_02, PASS, OR_01);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1101, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1101);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9307);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1102, ON);
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1102);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000808);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1103, ON);
    SetEventFlag(74000825, ON);
    
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1103);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 53200900); // Prayed in Archdragon Peak
    
    SkipIfConditionGroupStateUncompiled(6, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
    SetNetworkconnectedEventFlag(1104, ON);
    BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
    SetNetworkconnectedEventFlag(1117, ON);
    SetEventFlag(50006071, ON);
    SetEventFlag(74000201, ON);
    
    //
    Label9();
    SetEventFlag(70000057, OFF);
    
    //
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1100);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1101);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1102);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    SkipIfBatchEventFlags(4, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1116, 1118);
    BatchSetEventFlags(74000810, 74000813, OFF);
    IfEventFlag(OR_02, OFF, TargetEventFlagType.EventFlag, 74000801);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, OR_02);
    RandomlySetEventFlagInRange(74000810, 74000813, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 74000820);
    SetEventFlag(74000810, ON);
    
    GotoIfEventFlag(Label.LABEL1, OFF, TargetEventFlagType.EventFlag, 74000810);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X12_4, -1, X4_4);
    ChangeCharacterEnableState(4000366, Disabled);
    SetCharacterBackreadState(4000366, true);
    SkipIfBatchEventFlags(1, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1116, 1118);
    ForceAnimationPlayback(X4_4, 90960, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL17);
    
    //
    Label1();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    SkipIfBatchEventFlags(1, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1116, 1118);
    ForceAnimationPlayback(X0_4, 90680, false, false, true, 0, 1);
    
    //
    Label17();
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1116);
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1117);
    GotoIfEventFlag(Label.LABEL20, ON, TargetEventFlagType.EventFlag, 1118);
    EndUnconditionally(EventEndType.End);
    
    //
    Label19();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    //
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000810);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

// Sirris - Spawn State
Event(14005570, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL20, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1135, 1139);
    BatchSetNetworkconnectedEventFlags(1135, 1139, OFF);
    SetNetworkconnectedEventFlag(1135, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1136);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000058);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1135, 1139, OFF);
    SetNetworkconnectedEventFlag(1135, ON);
    SetEventFlag(74000799, OFF);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1120, 1134);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1120, ON);
    
    GotoIfEventFlag(Label.LABEL19, OFF, TargetEventFlagType.EventFlag, 1135);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1120);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 133);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1121, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1121);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000750);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1122, ON);
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1122);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000253);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1123, ON);
    
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1123);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 74000751);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1124, ON);
    
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 8200);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1125, ON);
    
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 1125);
    IfEventFlag(AND_08, ON, TargetEventFlagType.EventFlag, 74000752);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_08);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1126, ON);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1126);
    IfConditionGroup(AND_09, PASS, OR_01);
    IfEventFlag(AND_09, ON, TargetEventFlagType.EventFlag, 8220);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_09);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1127, ON);
    SetEventFlag(74000790, ON);
    
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 1127);
    IfEventFlag(AND_10, ON, TargetEventFlagType.EventFlag, 74000755);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_10);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1128, ON);
    
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 1127);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 74000760);
    IfEventFlag(AND_11, ON, TargetEventFlagType.EventFlag, 74000756);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_11);
    BatchSetNetworkconnectedEventFlags(1120, 1139, OFF);
    SetNetworkconnectedEventFlag(1130, ON);
    SetNetworkconnectedEventFlag(1137, ON);
    
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 1128);
    IfEventFlag(AND_12, ON, TargetEventFlagType.EventFlag, 9309);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_12);
    BatchSetNetworkconnectedEventFlags(1120, 1139, OFF);
    SetNetworkconnectedEventFlag(1129, ON);
    SetNetworkconnectedEventFlag(1138, ON);
    
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1120);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 1121);
    IfConditionGroup(AND_13, PASS, OR_02);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, 73500150);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_13);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1134, ON);
    
    IfBatchEventFlags(AND_14, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1122, 1128);
    IfEventFlag(AND_14, ON, TargetEventFlagType.EventFlag, 73500150);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_14);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1133, ON);
    
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1133);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 74000753);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_15);
    BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
    SetNetworkconnectedEventFlag(1134, ON);
    
    //
    Label19();
    SetEventFlag(70000058, OFF);
    
    //
    Label20();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1121);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1123);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1125);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1127);
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 1129);
    GotoIfEventFlag(Label.LABEL5, ON, TargetEventFlagType.EventFlag, 1133);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    Label1();
    Label2();
    Label3();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    SkipIfBatchEventFlags(1, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1136, 1138);
    ForceAnimationPlayback(X0_4, 90340, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL18);
    
    //
    Label5();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    
    //
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 1127);
    InitializeCommonEvent(20006000, 4000780, 1136, 1137, 74000770, 1060320051, 1135, 1139, 0, $LAYERS(0)); // Hostility
    InitializeCommonEvent(20006001, 4000780, 1136, 1137, 74000770, 3, $LAYERS(0)); // Hostility Cooldown
    
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1136);
    GotoIfEventFlag(Label.LABEL19, ON, TargetEventFlagType.EventFlag, 1137);
    GotoIfEventFlag(Label.LABEL20, ON, TargetEventFlagType.EventFlag, 1138);
    EndUnconditionally(EventEndType.End);
    
    //
    Label4();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X12_4, -1, X4_4);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EzstateInstructionRequest(X4_4, 800, 1);
    EndUnconditionally(EventEndType.End);
    
    //
    Label19();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    //
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Unused
Event(14005571, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 70000116);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1124);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9303);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9314);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetEventFlag(70000118, ON);
});

// Anri - Spawn State
Event(14005580, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1355, 1359);
    BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
    SetNetworkconnectedEventFlag(1355, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1356);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000069);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
    SetNetworkconnectedEventFlag(1355, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1340, 1354);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1340, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1355);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1340);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73300151);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1341, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1341);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9311);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1342, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1342);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000700);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1344, ON);
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1350);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 8260);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
    SetNetworkconnectedEventFlag(1351, ON);
    SetEventFlag(74000180, ON);
    
    // 
    Label9();
    SetEventFlag(70000069, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1355);
    SetEventFlag(74000720, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1342);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X20_4, -1, X4_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1356);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1357);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1358);
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label2();
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false, 0, 1);
    SetCharacterAIState(X0_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X4_4, X12_4, false, false, false, 0, 1);
    SetCharacterAIState(X4_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label3();
    GotoIfEventFlag(Label.LABEL20, OFF, TargetEventFlagType.EventFlag, 9013);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label20();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

// Anri - 
Event(14005581, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    SetEventFlag(X12_4, OFF);
    SetEventFlag(X16_4, OFF);
   
    IfBatchEventFlags(AND_01, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1356, 1357);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, X4_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1342);
    IfDamageType(AND_02, X0_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Less, X20_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    
    IfDamageType(AND_03, X4_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_03, X4_4, ComparisonType.Less, X20_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_03);
    
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    
    IfConditionGroup(OR_03, PASS, AND_01);
    
    IfBatchEventFlags(AND_04, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 1496, 1497);
    IfCharacterHPRatio(AND_04, X8_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1482);
    IfDamageType(AND_05, X8_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_05, X8_4, ComparisonType.Less, X20_4, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_05);
    
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X16_4);
    
    IfConditionGroup(AND_04, PASS, OR_02);
    
    IfConditionGroup(OR_03, PASS, AND_04);
    
    IfConditionGroup(MAIN, PASS, OR_03);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    SetCharacterTeamType(X8_4, TeamType.HostileNPC);
    
    BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
    SetNetworkconnectedEventFlag(1356, ON);
    BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
    SetNetworkconnectedEventFlag(1496, ON);
    SaveRequest(0);
    
    WaitFixedTimeFrames(1);
    
    SkipIfCharacterHasSpeffect(1, X0_4, 159, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    
    SkipIfCharacterHasSpeffect(1, X4_4, 159, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X4_4, 0, false, false, false, 0, 1);
    
    SkipIfCharacterHasSpeffect(1, X8_4, 159, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X8_4, 0, false, false, false, 0, 1);
});

// Unused
Event(14005582, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X12_4, OFF);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X32_4);
    IfDamageType(AND_02, X0_4, 10000, DamageType.Unspecified);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.Less, X16_4, ComparisonType.Equal, 1);
    
    IfConditionGroup(OR_01, PASS, AND_02);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X28_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    SaveRequest(0);
    
    WaitFixedTimeFrames(1);
    
    IfCharacterHasSpeffect(AND_03, X0_4, 159, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_03);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Anri - 
Event(14000583, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_01, X4_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X28_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, X16_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    
    IfCharacterHasSpeffect(OR_15, X0_4, 150, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, MAIN);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    
    IfCharacterHasSpeffect(OR_14, X0_4, 150, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(1, FAIL, MAIN);
    ForceAnimationPlayback(X4_4, 0, false, false, false, 0, 1);
    
    RequestCharacterAICommand(X0_4, 20, 1);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAICommand(X4_4, 20, 1);
    RequestCharacterAIReplan(X4_4);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X12_4, ON);
    SaveRequest(0);
});

// Anri - 
Event(14005584, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfCharacterHasSpeffect(OR_01, X0_4, 150, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, X0_4, 151, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, X4_4, 150, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_01, X4_4, 151, true, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_01);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    EzstateInstructionRequest(X0_4, 1903, 1);
    EzstateInstructionRequest(X4_4, 1903, 1);
    
    WaitFixedTimeFrames(10);
   
    EndUnconditionally(EventEndType.Restart);
});

// Horace -
Event(14000585, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.Greater, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X28_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X20_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(OR_02, X12_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(OR_02, X16_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    
    IfCharacterHasSpeffect(OR_15, X0_4, 150, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, MAIN);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    SaveRequest(0);
});

// Horace - Spawn State
Event(14005586, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1495, 1499);
    BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
    SetNetworkconnectedEventFlag(1495, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1496);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000076);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
    SetNetworkconnectedEventFlag(1495, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1480, 1494);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1480, ON);
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1495);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1480);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73300151);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1481, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1481);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9311);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1482, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1482);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000700);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
    SetNetworkconnectedEventFlag(1484, ON);
    
    // 
    Label9();
    SetEventFlag(70000076, OFF);
    
    // 
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1482);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1496);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1497);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1498);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label1();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // 
    Label3();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Anri -
Event(14005587, Restart, function(X0_4, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterHasSpeffect(AND_01, X0_4, 151, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfDamageType(MAIN, X0_4, 10000, DamageType.Unspecified);
    
    WaitFixedTimeFrames(1);
    
    IfDamageType(MAIN, X0_4, 10000, DamageType.Unspecified);
    WaitFixedTimeFrames(1);
    
    IfDamageType(MAIN, X0_4, 10000, DamageType.Unspecified);
    ForceCharacterDeath(X0_4, true);
});

// Fire Keeper - Spawn State
Event(14005600, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1015, 1019);
    BatchSetNetworkconnectedEventFlags(1015, 1019, OFF);
    SetNetworkconnectedEventFlag(1015, ON);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1018);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1015, 1019, OFF);
    SetNetworkconnectedEventFlag(1015, ON);
    SetEventFlag(74000121, ON);
    SetEventFlag(74000100, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1000, 1014);
    BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
    SetNetworkconnectedEventFlag(1000, ON);
   
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1001);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 145);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
    SetNetworkconnectedEventFlag(1002, ON);
    
    BatchSetEventFlags(74000135, 74000138, OFF);
    BatchSetEventFlags(74000103, 74000109, OFF);
   
    Label9();
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 74000147); // Random Position - Sitting on stairs
    GotoIfEventFlag(Label.LABEL15, ON, TargetEventFlagType.EventFlag, 74000148); // Random Position - By arch
    GotoIfEventFlag(Label.LABEL17, ON, TargetEventFlagType.EventFlag, 74000149); // Random Position - Sitting on stairs (near candles)
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1000);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 131);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_03);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1000);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1001);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1002);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1018);
    EndUnconditionally(EventEndType.End);
    
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // Initial position during first encounter in Firelink Shrine
    Label2();
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1018);
    EndUnconditionally(EventEndType.End);
   
    // Enabled
    Label1();
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1018);
    RandomlySetEventFlagInRange(74000103, 74000109, ON);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 74000103);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 74000104);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000105);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 50006020);
    GotoIfConditionGroupStateUncompiled(Label.LABEL17, PASS, AND_05);
    
    // Random Position - By arch
    Label15();
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Random Position - Sitting on stairs
    Label16();
    ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Random Position - Sitting on stairs (near candles)
    Label17();
    ForceAnimationPlayback(X0_4, 30001, false, false, false, 0, 1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Fire Keeper -
Event(14000601, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
   
    SetEventFlag(X0_4, ON);
});

// Fire Keeper - Item Lot
Event(14005602, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    
    AwardItemLot(X4_4);
    SetEventFlag(74000130, OFF);
    SetEventFlag(74000131, OFF);
});

// Firekeeper - 
Event(14000603, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
   
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    SetEventFlag(X4_4, ON);
});

// Firekeeper - 
Event(14005604, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1000);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9210);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetCharacterHome(X0_4, X4_4);
   
    WaitFixedTimeFrames(1);
    
    BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
    SetNetworkconnectedEventFlag(1001, ON);
    
    SkipIfCharacterHasSpeffect(2, X0_4, 151, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 20017, false, true, false, 0, 1);
    SkipUnconditionally(2);
    SkipIfCharacterHasSpeffect(1, X0_4, 153, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 20019, false, true, false, 0, 1);
    
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    
    IfCharacterHasSpeffect(MAIN, X0_4, 154, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(MAIN, X0_4, 154, false, ComparisonType.Equal, 1);
    RequestCharacterAICommand(X0_4, -1, 0);
});

// Firekeeper - 
Event(14005605, Default, function(X0_4, X4_4, X8_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, 5, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 150, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, X4_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Firekeeper - 
Event(14005615, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
   
    SetMapSoundState(4003700, Disabled);
    SetMapSoundState(4003701, Disabled);
   
    IfCharacterHasSpeffect(MAIN, X0_4, 155, true, ComparisonType.Equal, 1);
    IfPlayerGender(AND_01, Gender.Male);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    SetMapSoundState(4003700, Enabled);
    SkipUnconditionally(1);
    SetMapSoundState(4003701, Enabled);
   
    IfCharacterHasSpeffect(MAIN, X0_4, 155, false, ComparisonType.Equal, 1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Firekeeper - 
Event(14005616, Restart, function(X0_4) {
    SetEventFlag(74000139, OFF);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 74000139);
    
    SkipIfCharacterHasSpeffect(1, X0_4, 153, false, ComparisonType.Equal, 1);
    ForceAnimationPlayback(X0_4, 20018, false, false, false, 0, 1);
   
    EndUnconditionally(EventEndType.Restart);
});

// Unknown
Event(14005618, Default, function() {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 14005617);
    SetEventFlag(14000618, ON);
});

// Shrine Bonfire
Event(14005619, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 6500);
   
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 6500);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000015);
    ForceAnimationPlayback(4001950, 10, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000016);
    ForceAnimationPlayback(4001950, 20, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
   
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000017);
    ForceAnimationPlayback(4001950, 30, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000018);
    ForceAnimationPlayback(4001950, 40, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000019);
    ForceAnimationPlayback(4001950, 50, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000020);
    ForceAnimationPlayback(4001950, 60, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000021);
    ForceAnimationPlayback(4001950, 70, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000022);
    ForceAnimationPlayback(4001950, 80, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000023);
    ForceAnimationPlayback(4001950, 90, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000024);
    ForceAnimationPlayback(4001950, 100, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
   
    ForceAnimationPlayback(4001950, 9900, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
});

// Patches - Spawn State
Event(14005620, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL20, true);
    
    SetEventFlag(64001251, ON);
    SetEventFlag(74000919, OFF);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1375, 1379);
    BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
    SetNetworkconnectedEventFlag(1375, ON);
   
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 1376);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 70000070);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_15);
    BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
    SetNetworkconnectedEventFlag(1375, ON);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1360, 1374);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1360, ON);
    
    GotoIfEventFlag(Label.LABEL19, OFF, TargetEventFlagType.EventFlag, 1375);
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1365);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1204);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74000920);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1366, ON);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1366);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1206);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1365, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1365);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1207);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000921);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1367, ON);
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1367);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000925);
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1365, ON);
    SetEventFlag(74000914, ON);
    SetEventFlag(70000401, ON);
    
    //
    Label19();
    SetEventFlag(70000070, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1375);
    SetEventFlag(74000949, OFF);
    
    //
    Label20();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1364);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1365);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1370);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    
    //
    Label0();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterAnimationState(X0_4, Disabled);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1378);
    GotoIfBatchEventFlags(Label.LABEL17, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1376, 1377);
    EndUnconditionally(EventEndType.End);
    
    //
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 74000916);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1376, 1378);
    ForceAnimationPlayback(X4_4, 90810, false, false, true, 0, 1);
    SetEventFlag(74000917, ON);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1378);
    GotoIfBatchEventFlags(Label.LABEL17, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1376, 1377);
    EndUnconditionally(EventEndType.End);
    
    //
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1378);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 4002714, -1, X4_4);
    SetCharacterHome(X4_4, 4002714);
    EndUnconditionally(EventEndType.End);
    
    //
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
    
    //
    Label17();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
});

// Patches - 
Event(14000621, Restart, function(X0_4) {
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1364);
    
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(64001251, ON);
    SetEventFlag(14000623, ON);
    
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
    ReproduceObjectAnimation(4001251, 0);
    GotoUnconditionally(Label.LABEL2);
    
    //
    Label1();
    ReproduceObjectAnimation(4001251, 1);
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Enabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
    
    //
    Label2();
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4002710, 1);
    IfBatchEventFlags(AND_01, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1360, 1363);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1375);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 138);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9311);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1363);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 73500262);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 73500263);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1364, ON);
    SetEventFlag(64001251, OFF);
    SetEventFlag(14000623, OFF);
    PlaySE(4001251, SoundType.a_EnvironmentalSound, 400100000);
    
    //
    Label0();
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterAnimationState(X0_4, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Enabled);
    ForceAnimationPlayback(4001251, 1, false, false, false, 0, 1);
    InitializeCommonEvent(20005610, 14000623, 4002713, 4002712);
    InitializeCommonEvent(20005611, 14000623, 4003251, 4001251, 1400340);
});

// Patches - 
Event(14000622, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventID, 0);
    
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4002711, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1364);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1375);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL0, true);
   
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1365, ON);
    SetEventFlag(70000400, ON);
   
    //
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Enabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
    
    InitializeCommonEvent(20005610, 14000623, 4002713, 4002712); // Setup Door Area
    InitializeCommonEvent(20005611, 14000623, 4003251, 4001251, 1400340); // Setup Door
});

// Patches - 
Event(14000624, Restart, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000624);
   
    IfCharacterDeadalive(MAIN, 4000720, DeathState.Dead, ComparisonType.Equal, 1);
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 1365);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1378);
   
    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1370, ON);
    BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
    SetNetworkconnectedEventFlag(1377, ON);
   
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterHome(X0_4, 4002714);
    IfCharacterHasSpeffect(AND_01, X0_4, 159, true, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
});

// Unused
Event(14005625, Restart, function(X0_4) {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4, 1);
    SetSpeffect(10000, 4150);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Ludleth - Spawn State
Event(14005640, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    SetEventFlag(74000190, OFF);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1020, 1034);
    BatchSetNetworkconnectedEventFlags(1020, 1034, OFF);
    SetNetworkconnectedEventFlag(1020, ON);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1020);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14000110);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1020, 1034, OFF);
    SetNetworkconnectedEventFlag(1021, ON);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1035, 1039);
    BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
    SetNetworkconnectedEventFlag(1035, ON);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1038);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1020);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
    SetNetworkconnectedEventFlag(1035, ON);
    SetEventFlag(74000190, ON);
    SetEventFlag(74000150, ON);
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1021);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 14000110);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
    SetNetworkconnectedEventFlag(1038, ON);
    
    SetEventFlag(74000160, OFF);
    SetEventFlag(74000170, OFF);
    SetEventFlag(74000053, OFF);
    
    // Enabled (Person)
    Label9();
    DeactivateObject(X4_4, Disabled); 
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1020);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1021);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Enabled (Person) + Disable Object Talk
    Label0();
    ChangeCharacterEnableState(X8_4, Disabled);
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1038);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 4004705, -1);
    GotoIfEventFlag(Label.LABEL15, ON, TargetEventFlagType.EventFlag, 74000190);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 20, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Enabled
    Label15();
    SetEventFlag(74000170, ON);
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Force Treasure
    Label10();
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    DeactivateObject(X4_4, Enabled);
    EndUnconditionally(EventEndType.End);
});

// Andre - Spawn State
Event(14005660, Default, function(X0_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1175, 1179);
    BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
    SetNetworkconnectedEventFlag(1175, ON); // Hostility
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1176);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000060);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
    SetNetworkconnectedEventFlag(1175, ON); // Hostility
    SetEventFlag(74000200, ON);
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1178);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
    SetNetworkconnectedEventFlag(1176, ON); // Hostility
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1160, 1174);
    BatchSetNetworkconnectedEventFlags(1160, 1174, OFF);
    SetNetworkconnectedEventFlag(1160, ON); // Died
   
    SetEventFlag(70000060, OFF);
    
    // Disabled
    Label9();
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1160); // Died
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Passthrough
    Label0();
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1178); // Was killed
    
    // Enabled
    Label1();
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, 4004710, -1);
    ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Andre - Smithing State Monitor
Event(14005661, Default, function(X0_4) {
    // Disable if not in region
    IfPlayerStandingOnHit(OR_01, 4004100);
    IfPlayerStandingOnHit(OR_01, 4004101);
    IfPlayerStandingOnHit(OR_01, 4004102);
    IfPlayerStandingOnHit(OR_01, 4004103);
    IfPlayerStandingOnHit(OR_01, 4004104);
    IfPlayerStandingOnHit(OR_01, 4004109);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4002709, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_02, FAIL, AND_01);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1160);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    ChangeCharacterEnableState(X0_4, Disabled);
    
    WaitFixedTimeSeconds(1);
    ClearCompiledConditionGroupState(0);
   
    // Enable if in region
    IfPlayerStandingOnHit(OR_01, 4004100);
    IfPlayerStandingOnHit(OR_01, 4004101);
    IfPlayerStandingOnHit(OR_01, 4004102);
    IfPlayerStandingOnHit(OR_01, 4004103);
    IfPlayerStandingOnHit(OR_01, 4004104);
    IfPlayerStandingOnHit(OR_01, 4004109);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4002709, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1160);
    IfConditionGroup(MAIN, PASS, AND_02);
   
    ChangeCharacterEnableState(4000710, Enabled);
    ForceAnimationPlayback(4000710, 700, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1);
    
    EndUnconditionally(EventEndType.Restart);
});

// Shrine Handmaid - Spawn State
Event(14005680, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1195, 1199);
    BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
    SetNetworkconnectedEventFlag(1195, ON); // Hostility
   
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1198);
    IfCharacterDeadalive(AND_02, X0_4, DeathState.Alive, ComparisonType.Equal, 1);
   
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
    SetNetworkconnectedEventFlag(1196, ON); // Hostility
    SetEventFlag(74000251, ON);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1180, 1194);
    BatchSetNetworkconnectedEventFlags(1180, 1194, OFF);
    SetNetworkconnectedEventFlag(1180, ON); // Dead
   
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1195); // No Hostility
   
    Label9();
    SetEventFlag(70000061, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1195); // No Hostility
    SetEventFlag(74000251, OFF);
    
    // Disabled (is Dead)
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1180); // Is Dead
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Enabled
    Label0();
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1196); // Hostility
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1198); // Killed
    EndUnconditionally(EventEndType.End);
    
    //
    Label1();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000295);
    SetSpeffect(X0_4, 12605);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000294);
    SetSpeffect(X0_4, 12604);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000293);
    SetSpeffect(X0_4, 12603);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000292);
    SetSpeffect(X0_4, 12602);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000291);
    SetSpeffect(X0_4, 12601);
    EndUnconditionally(EventEndType.End);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 74000290);
    SetSpeffect(X0_4, 12600);
    EndUnconditionally(EventEndType.End);
    EndUnconditionally(EventEndType.End);
   
    // Disabled + Force Treasure
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Shrine Handmaid - Ash flags
Event(14005681, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(74000280, OFF);
    
    IfBatchEventFlags(AND_01, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 70000100, 70000106);
    IfBatchEventFlags(AND_01, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 70000108, 70000110);
    IfBatchEventFlags(AND_01, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 70000112, 70000115);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 70000107);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 70000116);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 70000111);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 74000603);
    IfConditionGroup(AND_01, PASS, OR_02);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 6951);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000120);
   
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 6952);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000121);
    
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(74000280, ON);
});

// Shrine Handmaid - Set Flags if Dead
Event(14005682, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfCharacterDeadalive(AND_01, X0_4, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
   
    BatchSetNetworkconnectedEventFlags(X8_4, X12_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000290);
    SetEventFlag(74000290, ON);
    GotoUnconditionally(Label.LABEL20);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000291);
    SetEventFlag(74000291, ON);
    GotoUnconditionally(Label.LABEL20);
   
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000292);
    SetEventFlag(74000292, ON);
    GotoUnconditionally(Label.LABEL20);
   
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000293);
    SetEventFlag(74000293, ON);
    GotoUnconditionally(Label.LABEL20);
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000294);
    SetEventFlag(74000294, ON);
    GotoUnconditionally(Label.LABEL20);
   
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 74000295);
    SetEventFlag(74000295, ON);
    GotoUnconditionally(Label.LABEL20);
   
    Label20();
    SaveRequest(0);
});

// Shrine Handmaid (Untended Graves) - Spawn State
Event(14005683, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
   
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1615, 1619);
    BatchSetNetworkconnectedEventFlags(1615, 1619, OFF);
    SetNetworkconnectedEventFlag(1615, ON); // Hostility
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1600, 1614);
    BatchSetNetworkconnectedEventFlags(1600, 1614, OFF);
    SetNetworkconnectedEventFlag(1600, ON); // Is Dead
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1615); // Hostility
    
    Label9();
    
    // Disabled (is Dead)
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1600); // Is Dead
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
   
    // Enabled
    Label0();
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1618); // Is Killed
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label2();
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
});

// Shrine Handmaid (Untended Graves) - Flag Setter
Event(14005684, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
   
    IfBatchEventFlags(MAIN, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 13300396, 13300397);
    SetEventFlag(X0_4, ON);
});

// Greirat - Spawn State
Event(14005700, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1215, 1219);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1215, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1216); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000062); // Sin State: Greirat
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1215, ON); // "Passive"
    
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1200, 1214);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1200, ON); // "Dead"
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1215); // Goto Label 9 if "Hostile" is OFF

    // Quest Stage: Undead Settlement Pillage
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1201);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 74000303);
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1202, ON);
    SetEventFlag(70000150, ON);
    SetEventFlag(70000153, ON);
    
    //  Quest Stage: Undead Settlement Pillage Success
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1202);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000316);
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1203, ON);
    
    //  Quest Stage: Irithyll Pillage
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1203);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 74000306);
    
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1204, ON);
    SetEventFlag(70000151, ON);
    
    //  Quest Stage: Irithyll Pillage Success
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1204);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000318);
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 1385); // Siegward Quest Stage
    IfEventFlag(AND_05, OFF, TargetEventFlagType.EventFlag, 1366); // Patches Quest Stage
    
    SkipIfConditionGroupStateUncompiled(5, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1205, ON);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1218, ON);
    GotoUnconditionally(Label.LABEL9);
    
    // 
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1204);
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 74000318);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1385); // Siegward Quest Stage
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 1366); // Patches Quest Stage
    IfConditionGroup(AND_06, PASS, OR_01);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1206, ON);
    
    // Quest Stage: Lothric Pillage
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 1206);
    IfEventFlag(AND_07, ON, TargetEventFlagType.EventFlag, 74000309);
    SkipIfConditionGroupStateUncompiled(6, FAIL, AND_07);
    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
    SetNetworkconnectedEventFlag(1207, ON);
    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
    SetNetworkconnectedEventFlag(1218, ON); // "Killed"
    SetEventFlag(70000152, ON);
    GotoUnconditionally(Label.LABEL9);
    
    // Hostility State
    Label9();
    SetEventFlag(70000062, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1215); // "Passive"
    SetEventFlag(74000320, OFF);
    
    // Host State
    Label10();
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1200); // "Dead"
    DeactivateObject(4006720, Disabled);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1201); // 
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1203); // 
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1206); // 
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Enabled
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1216); // "Hostile"
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1218); // "Killed"
    SetEventFlag(74000324, OFF); // Greirat cry pose
   
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, 74000301); // Given  Loretta's Bone
    IfEventFlag(AND_15, OFF, TargetEventFlagType.EventFlag, 74000325); // Loretta's Bone return dialogue
   
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_15);
    ForceAnimationPlayback(X0_4, 91020, true, false, true, 0, 1); // Cry pose
    SetEventFlag(74000324, ON); // Greirat cry pose
    EndUnconditionally(EventEndType.End);
    
    ForceAnimationPlayback(X0_4, 90970, false, false, false, 0, 1); // Squat pose
    EndUnconditionally(EventEndType.End);
    
    // Hostile
    Label1();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // Disabled + Force Treasure
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Unknown
Event(14005701, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1383);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 73500105);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1384, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1384);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
    SetNetworkconnectedEventFlag(1385, ON);
});

// Irina - Spawn State
Event(14005720, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1295, 1299);
    BatchSetNetworkconnectedEventFlags(1295, 1299, OFF);
    SetNetworkconnectedEventFlag(1295, ON); // "Passive"
    
     // Skip Passive set if "Hostile" or Sin State: Irina (NO SIN) is present
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1296); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000066); // Sin State: Irina
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1295, 1299, OFF);
    SetNetworkconnectedEventFlag(1295, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1280, 1294);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1280, ON); // "Dead"
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1295); // Goto Label 9 if "Hostile" is ON
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1281); // Quest Stage: In Firelink
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 25009550); // Given Humanity
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1282, ON); // Quest Stage: Dark Path: Boss Progress 1
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1282); // Quest Stage: Dark Path: Boss Progress 1
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 25009550); // Given Humanity
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1283, ON); // Quest Stage: Dark Path: Boss Progress 2
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1281); // Quest Stage: In Firelink
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 25009551); // Given Holy Fragments
    
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
    SetNetworkconnectedEventFlag(1286, ON); // Quest Stage: Holy Path: Is Firekeeper
    SetEventFlag(70000353, OFF); // Given Irina the Londor Braille Divine Tome
    SetEventFlag(70000354, OFF); // Unknown
    
    Label9();
    SetEventFlag(70000066, OFF); // Sin State: Irina
    SetEventFlag(74000352, OFF); // Wore Morne's Gauntlets
    BatchSetEventFlags(74000383, 74000392, OFF); // Reset Dark/Holy Path flags
    
    Label10();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X24_4, -1, X0_4); // Normal position
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X28_4, -1, X4_4); // Alt position
    WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, X32_4, -1, X8_4); // Firekeeper position
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1281); // Quest Stage: In Firelink
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1282); // Quest Stage: Dark Path: Boss Progress 1
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 1283); // Quest Stage: Dark Path: Boss Progress 2
    GotoIfEventFlag(Label.LABEL4, ON, TargetEventFlagType.EventFlag, 1284); // Quest Stage: Dark Path: Eygon fight
    GotoIfEventFlag(Label.LABEL5, ON, TargetEventFlagType.EventFlag, 1285); // Quest Stage: Dark Path: Eygon killed
    GotoIfEventFlag(Label.LABEL6, ON, TargetEventFlagType.EventFlag, 1286); // Quest Stage: Holy Path: Is Firekeeper
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Normal Position
    Label1();
    Label2();
    Label3();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    ForceAnimationPlayback(X0_4, X12_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Normal Position - Disabled + Force Treaure
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    
    // Alt Position
    Label4();
    Label5();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 14000722); // Had "First meeting"
    ForceAnimationPlayback(X4_4, X16_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    ForceAnimationPlayback(X4_4, X12_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Alt Position - Disabled + Force Treaure
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
    
    // Firekeeper Position
    Label6();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1298); // "Killed"
    ForceAnimationPlayback(X8_4, X20_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Firekeeper Position - Disabled + Force Treaure
    Label18();
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X8_4);
    EndUnconditionally(EventEndType.End);
});

// Irina - First meeting situp
Event(14005722, Default, function(X0_4, X4_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14000722); // Had "First meeting"
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 14000722); // Had "First meeting"
    ForceAnimationPlayback(X0_4, X4_4, false, true, false, 0, 1);
    SetEventFlag(14005722, ON);
});

// Irina - 
Event(14005723, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    SetEventFlag(X4_4, OFF);
   
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X12_4);
    IfCharacterHPRatio(AND_01, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    SetEventFlag(X4_4, OFF);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X16_4, ON);
   
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    ChangeCharacterEnableState(X28_4, Enabled);
    SetCharacterBackreadState(X28_4, false);
    ForceAnimationPlayback(X28_4, X32_4, false, false, false, 0, 1);
   
    SaveRequest(0);
    
    SetSpeffect(X0_4, 4640);
   
    WaitFixedTimeSeconds(5);
   
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

// Irina - Unused
Event(14005725, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 0);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 0, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL20, PASS, AND_01);
    
    RotateCharacter(10000, 0, 69070, false);
    
    WaitFixedTimeFrames(1);
   
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 0, 1);
    IfCharacterHasSpeffect(AND_02, 10000, 150, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfEventFlag(OR_02, OFF, TargetEventFlagType.EventFlag, 0);
    IfElapsedFrames(OR_02, 89);
    IfConditionGroup(OR_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, OR_01);
   
    SkipIfConditionGroupStateCompiled(2, FAIL, AND_02);
    SetEventFlag(0, OFF);
    EndUnconditionally(EventEndType.Restart);
  
    SkipIfConditionGroupStateCompiled(3, FAIL, OR_02);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    SetEventFlag(0, OFF);
   
    EndUnconditionally(EventEndType.Restart);
   
    Label20();
    RotateCharacter(10000, 0, 0, true);
    
    WaitFixedTimeFrames(1);
   
    SetEventFlag(0, ON);
   
    IfEventFlag(OR_03, OFF, TargetEventFlagType.EventFlag, 0);
    IfCharacterHasSpeffect(AND_03, 10000, 150, false, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfConditionGroup(MAIN, PASS, OR_03);
    
    SkipIfConditionGroupStateCompiled(3, FAIL, AND_03);
    SetEventFlag(0, OFF);
    SetEventFlag(0, OFF);
    EndUnconditionally(EventEndType.Restart);
   
    SetEventFlag(0, OFF);
    ForceAnimationPlayback(10000, 0, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

// Yoel - Spawn State
Event(14005740, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1075, 1079);
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1075, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1076); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000055); // Sin State: Yoel (NO SIN)
   
    // Skip Passive set if "Hostile" or Sin State: Yoel (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1075, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1060, 1074);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1060, ON); // "Dead"
   
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1075); // Goto Label 0 if "Hostile" is ON
   
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1060); // "Dead"
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 73100152); // Invited to Firelink
   
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1061, ON); // Quest Stage: In Firelink
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1061); // Quest Stage: In Firelink
    IfPlayerRemainingYoelLevelCount(AND_03, ComparisonType.LessOrEqual, 0); // Extracted all Levels
    
    // Skip if not in Firelink or levels remain
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1062, ON); // Quest Stage: Yoel Collapse
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1078, ON); // "Killed"
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1061); // Quest Stage: In Firelink
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 25001009); // Killed Pontiff Sulyvahn
   
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1064, ON); // Quest Stage: In Firelink (fail due to Catacombs)
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1078, ON); // "Killed"
   
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1060); // "Dead"
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 25001009); // Killed Pontiff Sulyvahn
   
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
    SetNetworkconnectedEventFlag(1063, ON); // Quest Stage: In Undead Settlement (fail due to Pontiff Sulyvahn Kill)
    BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
    SetNetworkconnectedEventFlag(1078, ON); // "Killed"
    
    // Hostility
    Label9();
    SetEventFlag(70000055, OFF); // Sin State: Yoel
    BatchSetEventFlags(74000430, 74000433, OFF);
    
    // Client State
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1061); // Quest Stage: In Firelink
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1062); // Quest Stage: Yoel Collapse
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1064); // Quest Stage: In Firelink (fail due to Pontiff Sulyvahn Kill)
   
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
   
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1078); // "Killed"
    EndUnconditionally(EventEndType.End);
    
    // Killed State (Normal)
    Label1();
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Killed State (Quest End)
    Label2();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    EzstateInstructionRequest(X0_4, X4_4, 1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Leonhard - Spawn State
Event(14005750, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
   
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1155, 1159);
    BatchSetNetworkconnectedEventFlags(1155, 1159, OFF);
    SetNetworkconnectedEventFlag(1155, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1156); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000059); // Sin State: Leonhard (NO SIN)
    
    // Skip Passive set if "Hostile" or ""Sin State: Leonhard" (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1155, 1159, OFF);
    SetNetworkconnectedEventFlag(1155, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1140, 1154);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1140, ON); // "Dead"
   
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1155); // Goto Label 9 if "Passive" is OFF
    
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1140); // "Dead"
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 13000005); // Knight's Rest enabled
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 9301); // Vordt Killed
    IfConditionGroup(AND_02, PASS, OR_02);
   
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1141, ON); // Quest Stage: Vordt Killed
    
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1141); // Quest Stage: Vordt Killed
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000850); // Given Cracked Red Eye Orbs
   
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1142, ON); // Quest Stage: Cracked Red Eye Orbs
    
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 1142); // Quest Stage: Cracked Red Eye Orbs
    IfPlayerHasdoesntHaveItem(AND_04, ItemType.Goods, 373, OwnershipState.Owns); // Pale Tongue
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 13100002); // Undead Settlement bonfire
    IfEventFlag(OR_04, ON, TargetEventFlagType.EventFlag, 9303); // Curse-Rotted Greatwood Killed
    IfConditionGroup(AND_04, PASS, OR_04); 
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_04);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1143, ON); // Quest Stage: Greatwood Killed
    
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 1143); // Quest Stage: Greatwood Killed
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000851); // Want Red Eye Orb
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1144, ON); // Quest Stage: Find Red Eye Orb
    
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 1144); // Quest Stage: Find Red Eye Orb
    IfEventFlag(AND_06, ON, TargetEventFlagType.EventFlag, 13000380); // Killed Darkwraith in High Wall
    
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_06);
    BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
    SetNetworkconnectedEventFlag(1145, ON); // Quest Stage: Found Red Eye Orb
    
    // Hostility
    Label9();
    SetEventFlag(70000059, OFF); // Sin State: Leonhard (SIN)
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 1155); // "Passive" is OFF
    SetEventFlag(74000870, OFF); // Made Hostile
    
    // Client State
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1141); // Quest Stage: Vordt Killed
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1143); // Quest Stage: Greatwood Killed
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1145); // Quest Stage: Found Red Eye Orb
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL16, ON, TargetEventFlagType.EventFlag, 1156); // "Hostile"
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1158); // "Killed"
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Hostile State
    Label16();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // Killed State
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Cornyx - Spawn State
Event(14005760, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL9, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1255, 1259);
    BatchSetNetworkconnectedEventFlags(1255, 1259, OFF);
    SetNetworkconnectedEventFlag(1255, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1256); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000064); // Sin State: Cornyx (NO SIN)
    
    // Skip Passive set if "Hostile" or Sin State: Cornyx (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1255, 1259, OFF);
    SetNetworkconnectedEventFlag(1255, ON); // "Passive"
    SetEventFlag(74000460, OFF); // Made Hostile
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1240, 1254);
    BatchSetNetworkconnectedEventFlags(1240, 1254, OFF);
    SetNetworkconnectedEventFlag(1240, ON); // "Dead"
    
    // Sin Flag
    SetEventFlag(70000064, OFF); // Sin State: Cornyx (SIN)
    
    // Client State
    Label9();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1241); // Goto Label 0 if "Is in Host World" is ON
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X4_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 4004735, -1, X0_4); // Move to Position
    GotoIfEventFlag(Label.LABEL10, ON, TargetEventFlagType.EventFlag, 1256); // Goto Label 0 if  "Hostile" is ON
    GotoIfEventFlag(Label.LABEL11, ON, TargetEventFlagType.EventFlag, 1258); // Goto Label 0 if  "Killed" is ON
    ForceAnimationPlayback(X0_4, 90450, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Hostile State
    Label10();
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndUnconditionally(EventEndType.End);
    
    // Killed State
    Label11();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Karla - Spawn State
Event(14005780, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    
    // Skip if any of the aggression flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1275, 1279);
    BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
    SetNetworkconnectedEventFlag(1275, ON); // "Passive"
    
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1276); // "Hostile"
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70000065); // Sin State: Karla (NO SIN)
    
    // Skip Passive set if "Hostile" or Sin State: Karla (NO SIN) is present
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
    SetNetworkconnectedEventFlag(1275, ON); // "Passive"
    
    // Skip if any of the NPC flags are ON
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1260, 1274);
    BatchSetNetworkconnectedEventFlags(1260, 1274, OFF);
    SetNetworkconnectedEventFlag(1260, ON); // "Dead"
    
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1275); // Goto Label 9 if "Passive" is OFF
    
    // Sin Flag
    Label9();
    SetEventFlag(70000065, OFF); // "Sin State: Karla" (SIN)
    
    // Client State
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1261); // Goto Label 0 if "Is in Host World" is ON
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X8_4, Disabled);
    EndUnconditionally(EventEndType.End);
    
    // Host State
    Label0();
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1278); // Goto Label 1 if "Killed" is ON
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    
    // Killed State
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

// Unused
Event(14005900, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerInoutsideArea(EventEndType.End, InsideOutsideState.Outside, 10000, 4002901);
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 4002900, -1, 10000);
});

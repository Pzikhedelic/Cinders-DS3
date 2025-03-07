// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    RegisterBonfire(13010000, 3011950, 5, 180, 0); // Lothric Castle
    //RegisterBonfire(13010002, 3011952, 5, 180, 0); // Dragon Barracks
    //InitializeCommonEvent(20005500, 13010800, 13010001, 3010951, 3011951);
    
    InitializeEvent(0, 13015470, 0);
    InitializeCommonEvent(20005780, 3011750, 3);
    InitializeCommonEvent(20005780, 3011751, 3);
    InitializeCommonEvent(20005780, 3011753, 3);
    InitializeCommonEvent(20005110, 3010350, 3012380);
    InitializeCommonEvent(20005132, 3010413, 1084227584, 3012460); // Lothric Knight - Wakeup
    InitializeCommonEvent(20005201, 3010414, 700, 1700, 3012480, 0); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005201, 3010415, 700, 1700, 3012480, 1053609165); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005210, 3010417, 700, 1700, 1102053376); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005110, 3010418, 3012380); // Lothric Knight - Wakeup
    InitializeCommonEvent(20005110, 3010419, 3012380); // Lothric Knight - Wakeup
    InitializeCommonEvent(20005210, 3010420, 700, 1700, 1077936128); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005110, 3010430, 3012340); // Large Hollow Soldier - Wakeup
    InitializeCommonEvent(20005330, 3010431, 3012450, 13015231); // Large Hollow Soldier - Wakup and run
    InitializeCommonEvent(20005110, 3010432, 3012450); // Large Hollow Soldier - Wakeup
    InitializeCommonEvent(20005110, 3010450, 3012604); // Winged Knight - Wakeup
    InitializeCommonEvent(20005111, 3010451, 3010, 3012605); // Winged Knight - Wakeup
    InitializeEvent(0, 13015310, 3010460, 706, 1706); // Lothric Priest - Wakeup
    InitializeCommonEvent(20005110, 3010500, 3012600);
    InitializeCommonEvent(20005215, 3010501, 710, 1710, 1084227584, 1061997773);
    InitializeCommonEvent(20005215, 3010502, 710, 1710, 1084227584, 1067030938);
    InitializeCommonEvent(20005220, 3010503, 703, 1703);
    InitializeCommonEvent(20005220, 3010504, 706, 1706);
    InitializeCommonEvent(20005220, 3010506, 706, 1706);
    InitializeCommonEvent(20005202, 3010507, 710, 1710, 3012530);
    InitializeCommonEvent(20005110, 3010508, 3012600);
    InitializeCommonEvent(20005110, 3010510, 3012472);
    InitializeCommonEvent(20005110, 3010511, 3012472);
    InitializeCommonEvent(20005202, 3010512, 710, 1710, 3012531); // Hollow Soldier - Hang wakeup
    InitializeCommonEvent(20005200, 3010520, 706, 1706, 3012435);
    InitializeCommonEvent(20005201, 3010521, 706, 1706, 3012435, 1056964608);
    InitializeCommonEvent(20005215, 3010538, 710, 1710, 1084227584, 1060320051);
    InitializeCommonEvent(20005200, 3010539, 703, 1703, 3012600);
    InitializeCommonEvent(20005220, 3010549, 705, 1705);
    InitializeCommonEvent(20005110, 3010551, 3012430);
    InitializeCommonEvent(20005119, 3010557, 3012338, 3012339, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3010558, 3012338, 3012339, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005110, 3010562, 3012335);
    InitializeCommonEvent(20005110, 3010563, 3012440);
    InitializeCommonEvent(20005110, 3010564, 3012440);
    InitializeCommonEvent(20005110, 3010565, 3012335);
    InitializeCommonEvent(20005110, 3010566, 3012440);
    InitializeCommonEvent(20005202, 3010567, 710, 1710, 3012530);
    InitializeCommonEvent(20005110, 3010568, 3012600);
    InitializeCommonEvent(20005200, 3010569, 703, 1703, 3012470);
    InitializeCommonEvent(20005122, 3010570, 3000, 1084227584);
    InitializeCommonEvent(20005110, 3010571, 3012471);
    InitializeCommonEvent(20005202, 3010572, 710, 1710, 3012530);
    InitializeCommonEvent(20005220, 3010573, 703, 1703);
    InitializeCommonEvent(20005220, 3010574, 706, 1706);
    InitializeEvent(0, 13015230, 0);
    InitializeCommonEvent(20005110, 3010610, 3012490);
    InitializeCommonEvent(20005341, 13010590, 3010610, 13103000);
    InitializeCommonEvent(20005341, 13010593, 3010310, 21504000); // Crystal Lizard
    InitializeCommonEvent(20005341, 13010593, 3010311, 21504010); // Crystal Lizard
    InitializeEvent(0, 13015550, 3010830); // Corrupted Wyvern (Left)
    InitializeEvent(0, 13015551, 3010831); // Corrupted Wyvern (Right)
    InitializeEvent(0, 13015555, 0); // Corrupted Wyvern - Pus of Man State
    InitializeEvent(0, 13015590, 13010890, 3010830, 20); // Corrupted Wyvern (Left) - Flag Toggle
    InitializeEvent(1, 13015590, 13010891, 3010831, 30); // Corrupted Wyvern (Right) - Flag Toggle
    InitializeEvent(0, 13015556, 3010835, 13010895, 13010890, 13015550); // Corrupted Wyvern (Left) - Treasure
    InitializeEvent(0, 13015557, 3010836, 13010896, 13010891); // Corrupted Wyvern (Right) - Treasure
    InitializeEvent(0, 13015558, 3010835, 3010830, 13010895, 40); // Corrupted Wyvern (Left) - Warp
    InitializeEvent(0, 13015559, 3010836, 3010831, 13010896, 41); // Corrupted Wyvern (Right) - Warp
    InitializeEvent(0, 13015580, 0); // Corrupted Wyvern (Left) - Set Effect on Wakeup
    InitializeEvent(0, 13015581, 0); // Corrupted Wyvern (Left) - Set Effect on Wakeup
    InitializeEvent(0, 13015585, 0); // Corrupted Wyvern (Right) - Set Effect on Wakeup
    InitializeCommonEvent(20005410, 3010551, 3005);
    InitializeCommonEvent(20005411, 3010551, 3010555, 703, 1703, 1053609165);
    InitializeCommonEvent(20005411, 3010551, 3010556, 705, 1705, 1061997773);
    InitializeCommonEvent(20005411, 3010551, 3010560, 703, 1703, 1063675494);
    InitializeCommonEvent(20005411, 3010551, 3010561, 703, 1703, 1065353216);
    InitializeCommonEvent(20005415, 13011500, 3010500, 3010600, 706, 1706, 0, 13015501, 13015502); // Pus of Man Setup
    InitializeCommonEvent(20005415, 13011510, 3010539, 3010602, 703, 1703, 0, 13015503, 13015504); // Pus of Man Setup
    InitializeCommonEvent(20005415, 13011520, 3010568, 3010604, 703, 1703, 0, 13015505, 13015506); // Pus of Man Setup
    InitializeCommonEvent(20005520, 13010500, 3011450, 3014300);
    InitializeCommonEvent(20005520, 13010501, 3011451, 3014301);
    InitializeCommonEvent(20005520, 13010502, 3011452, 3014302);
    InitializeCommonEvent(20005520, 13010503, 3011453, 3014303);
    InitializeCommonEvent(20005520, 13010504, 3011454, 3014304);
    InitializeCommonEvent(20005520, 13010510, 3011460, 3014310);
    InitializeCommonEvent(20005520, 13010511, 3011461, 3014311);
    InitializeCommonEvent(20005520, 13010512, 3011462, 3014312);
    InitializeCommonEvent(20005520, 13010514, 3011464, 3014314);
    InitializeCommonEvent(20005530, 13015400, 3011300);
    InitializeCommonEvent(20005530, 13015401, 3011301);
    InitializeCommonEvent(20005530, 13015402, 3011302);
    InitializeCommonEvent(20005530, 13015403, 3011303);
    InitializeCommonEvent(20005530, 13015404, 3011304);
    InitializeCommonEvent(20005530, 13015405, 3011305);
    InitializeCommonEvent(20005530, 13015406, 3011306);
    InitializeCommonEvent(20005530, 13015407, 3011307);
    InitializeCommonEvent(20005530, 13015408, 3011308);
    InitializeCommonEvent(20005530, 13015409, 3011309);
    InitializeCommonEvent(20005530, 13015410, 3011310);
    InitializeCommonEvent(20005530, 13015411, 3011311);
    InitializeCommonEvent(20005530, 13015412, 3011312);
    InitializeCommonEvent(20005530, 13015413, 3011313);
    InitializeCommonEvent(20005530, 13015414, 3011314);
    InitializeCommonEvent(20005530, 13015415, 3011315);
    InitializeCommonEvent(20005530, 13015416, 3011316);
    InitializeCommonEvent(20005530, 13015417, 3011317);
    InitializeCommonEvent(20005530, 13015418, 3011318);
    InitializeCommonEvent(20005530, 13015419, 3011319);
    InitializeCommonEvent(20005530, 13015420, 3011320);
    InitializeCommonEvent(20005530, 13015421, 3011321);
    InitializeCommonEvent(20005530, 13015422, 3011322);
    InitializeCommonEvent(20005530, 13015423, 3011323);
    InitializeCommonEvent(20005530, 13015424, 3011324);
    InitializeCommonEvent(20005530, 13015425, 3011325);
    InitializeCommonEvent(20005530, 13015426, 3011326);
    InitializeCommonEvent(20005530, 13015427, 3011327);
    InitializeCommonEvent(20005530, 13015428, 3011328);
    InitializeCommonEvent(20005530, 13015429, 3011329);
    InitializeCommonEvent(20005530, 13015430, 3011330);
    InitializeCommonEvent(20005530, 13015431, 3011331);
    InitializeCommonEvent(20005650, 13010310, 3011390);
    InitializeCommonEvent(20005622, 13010450, 13010452, 3011400, 3011401, 3011402, 13011450);
    InitializeCommonEvent(20005628, 13010451, 3011402, 3012401);
    InitializeCommonEvent(20005620, 13010460, 13010462, 3011410, 3011411, 3011412, 13011460);
    InitializeCommonEvent(20005628, 13010461, 3011412, 3012411);
    InitializeEvent(0, 13015225, 0);
    InitializeEvent(0, 13014522, 0);
    SetObjectInvulnerability(3011500, Enabled);
    SetObjectInvulnerability(3011501, Enabled);
    InitializeEvent(0, 13015200, 13010300, 13010302, 3011491, 13011300);
    InitializeEvent(0, 13015202, 0);
    InitializeEvent(0, 13015210, 13010301, 3011491);
    InitializeCommonEvent(20005610, 13010550, 3012421, 3012420);
    InitializeCommonEvent(20005611, 13010550, 13011580, 3011420, 300320);
    InitializeEvent(0, 13014242, 0);
    RegisterLadder(13010670, 13010671, 3011670);
    RegisterLadder(13010672, 13010673, 3011671);
    RegisterLadder(13010674, 13010675, 3011672);
    RegisterLadder(13010676, 13010677, 3011673);
    
    // Sirris of the Sunless Realm
    InitializeCommonEvent(20005700, 13010800, 13014191, 13015191, 3010191, 3012705); // Summon Setup
    InitializeCommonEvent(20005710, 13014191, 13015805, 3010191, 3012801, 3012820); // Summon Boss Fog AI
    InitializeCommonEvent(20005720, 13014191, 13015191, 13010800, 3010191); // Summon Apperance
    
    // Eygon of Carim
    InitializeCommonEvent(20005700, 13010800, 13014192, 13015192, 3010192, 3012710); // Summon Setup
    InitializeCommonEvent(20005710, 13014192, 13015805, 3010192, 3012801, 3012820); // Summon Boss Fog AI
    InitializeCommonEvent(20005720, 13014192, 13015192, 13010800, 3010192); // Summon Apperance
    
    InitializeEvent(0, 13015810, 0);
    InitializeEvent(0, 13015811, 0);
    InitializeEvent(0, 13015812, 0);
    InitializeEvent(0, 13015820, 0);
    InitializeEvent(0, 13015815, 0);
    InitializeEvent(0, 13015830, 3010812, 1067030938); // Pilgrim Angel - Animation
    InitializeCommonEvent(20006010, 73010952, 69003);
    InitializeCommonEvent(20006031, 73010953, 3012750);
    InitializeEvent(0, 13010050, 0); // Cinders Scripts
});

Event(50, Default, function() {
    SetCharacterAnimationState(3010790, Disabled); // Altar of Sunlight
    SetCharacterGravity(3010790, Disabled); // Altar of Sunlight
    SetCharacterMaphit(3010790, true); // Altar of Sunlight
    SetMapSoundState(3012803, Disabled);
    SetMapSoundState(3012804, Disabled);
    InitializeEvent(0, 13010050, 0); // Cinders Scripts
});

// Cinders Setup
Event(13010050, Restart, function() {
    // Luyila of Londor
    InitializeCommonEvent(20090010, 3010730, 3012730, 30310, 63010, 10100, 99005110, 99005111, 13010730); // Setup
    InitializeCommonEvent(20009201, 3010730, 85000); // Luyila of Londor
    
    // Dominatrix Sharron
    InitializeCommonEvent(20090010, 3010732, 3012732, 30310, 63010, 10700, 99005160, 99005161, 13010732); // Setup
    InitializeCommonEvent(20009201, 3010732, 85000); // Kill Taunt
    
    // The Pursuer
    InitializeCommonEvent(20090010, 3010734, 3012734, 30310, 63010, 11710, 99005310, 99005311, 13010734); // Setup
    InitializeCommonEvent(20009201, 3010734, 81200); // Kill Taunt
    InitializeCommonEvent(20005500, 13010734, 13010000, 3010950, 3011950); // Lothric Castle bonfire
    
    // Tiny
    InitializeCommonEvent(20090010, 3010736, 3012736, 30310, 63010, 10500, 99005140, 99005141, 13010736); // Setup
    InitializeCommonEvent(20009201, 3010736, 85400); // Kill Taunt
 
    // One-time Loot
    InitializeCommonEvent(20005351, 3010417, 12800020, 53012082, 1); // Lothric Knight Greatsword
    InitializeCommonEvent(20005351, 3010420, 12800030, 53012083, 1); // Lothric Knight Long Spear / Lothric Knight Greatshield
    
    // Mimics
    InitializeCommonEvent(20005400, 3010306); // Open Action
    InitializeCommonEvent(20005400, 3010307); // Open Action
    InitializeCommonEvent(20005400, 3010300); // Open Action
    InitializeCommonEvent(20005400, 3010301); // Open Action
    InitializeCommonEvent(20000343, 13010306, 3010306, 53012065); // Treasure Control
    InitializeCommonEvent(20000343, 13010307, 3010307, 53012067); // Treasure Control
    InitializeCommonEvent(20000343, 13010591, 3010300, 21201100); // Treasure Control
    InitializeCommonEvent(20000343, 13010592, 3010301, 21201000); // Treasure Control
    
    // Chests
    InitializeCommonEvent(20005520, 13011454, 3011454, 3014315);
    InitializeCommonEvent(20005520, 13011455, 3011455, 3014316);
    InitializeCommonEvent(20005520, 13011456, 3011456, 3014317);
    InitializeCommonEvent(20005520, 13011457, 3011457, 3014318);
    InitializeCommonEvent(20005520, 13011458, 3011458, 3014319);
    InitializeCommonEvent(20005520, 13011459, 3011459, 3014320);
    
    // Curses
    InitializeCommonEvent(20081010, 3015760, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 3015760, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 3015760, 250001402, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 3015760, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 3015760, 250001202, 25000157); // Curse of Frailty
    InitializeCommonEvent(20081000, 3015750, 25000100); // Curse of Attraction
    
    // Status Aux
    InitializeCommonEvent(20090200, 3015760, 112610); // Frostbite
    
    // NG+
    InitializeCommonEvent(20008001, 3015775, 1);
    InitializeCommonEvent(20008001, 3015776, 2);
    InitializeCommonEvent(20008001, 3015777, 3);
    
    // Covenants 
    InitializeCommonEvent(20081020, 3015760, 160100400, 160100403); // Company of Champions
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 3010710); // Companion 1
    InitializeCommonEvent(20080000, 3010711) // Companion 2
    InitializeCommonEvent(20080000, 3010712) // Companion 3
    InitializeCommonEvent(20080000, 3010713) // Companion 4
    InitializeCommonEvent(20080000, 3010714) // Companion 5
    InitializeCommonEvent(20080000, 3010715) // Companion 6
    InitializeCommonEvent(20080000, 3010716) // Companion 7
    InitializeCommonEvent(20080000, 3010717) // Companion 8
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 30, 1);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 3010710, 160760000, 160760207, 30, 1); // Companion 1
    InitializeCommonEvent(20080001, 3010711, 160760001, 160760207, 30, 1) // Companion 2
    InitializeCommonEvent(20080001, 3010712, 160760002, 160760207, 30, 1) // Companion 3
    InitializeCommonEvent(20080001, 3010713, 160760003, 160760207, 30, 1) // Companion 4
    InitializeCommonEvent(20080001, 3010714, 160760004, 160760207, 30, 1) // Companion 5
    InitializeCommonEvent(20080001, 3010715, 160760005, 160760207, 30, 1) // Companion 6
    InitializeCommonEvent(20080001, 3010716, 160760006, 160760207, 30, 1) // Companion 7
    InitializeCommonEvent(20080001, 3010717, 160760007, 160760207, 30, 1) // Companion 8
    
});

Event(13014242, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, false);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 13010550);
    EndUnconditionally(EventEndType.End);
    Label0();
    ReproduceObjectAnimation(3011420, 1);
    EndUnconditionally(EventEndType.End);
});

Event(13014522, Restart, function() {
    InitializeCommonEvent(20005623, 13010450, 13010452, 3011400, 3011401, 3014401, 3011402, 3014402, 3012401, 3012402, 13011450, 13014450, 13010451);
    InitializeEvent(0, 13015220, 13010460, 3011410, 3011411, 3014411, 3011413, 3014413, 3011412, 3014412);
});

Event(13015200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(X12_4, OFF);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X0_4);
    ForceAnimationPlayback(X8_4, 0, false, false, true, 0, 1);
    SetEventFlag(X4_4, OFF);
    EndUnconditionally(EventEndType.End);
    Label0();
    ForceAnimationPlayback(X8_4, 2, false, false, true, 0, 1);
    SetEventFlag(X4_4, ON);
    EndUnconditionally(EventEndType.End);
});

Event(13015201, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_13, ON, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(OR_15, PASS, AND_13);
    IfEventFlag(AND_14, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_14, OFF, TargetEventFlagType.EventFlag, X4_4);
    IfConditionGroup(OR_15, PASS, AND_14);
    IfConditionGroup(AND_15, PASS, OR_15);
    IfEventFlag(AND_15, ON, TargetEventFlagType.EventFlag, X20_4);
    GotoIfConditionGroupStateUncompiled(Label.LABEL9, PASS, AND_15);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, X4_4);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetObjactState(X12_4, 304874, Enabled);
    IfObjactEventFlag(OR_01, X16_4);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(OR_03, PASS, OR_01);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, OR_03);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetObjactState(X12_4, -1, Disabled);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X20_4, ON);
    SetNetworkconnectedEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, OR_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X24_4);
    ForceAnimationPlayback(X8_4, 1, false, true, true, 0, 1);
    GotoUnconditionally(Label.LABEL1);
    Label0();
    SetNetworkconnectedEventFlag(X24_4, ON);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X8_4, 1, false, true, true, 0, 1);
    ForceAnimationPlayback(X12_4, 3, false, false, true, 0, 1);
    SetNetworkconnectedEventFlag(X24_4, OFF);
    Label1();
    IfObjectBackread(AND_01, X8_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X20_4, OFF);
    EndUnconditionally(EventEndType.Restart);
    Label2();
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetObjactState(X12_4, 304874, Enabled);
    IfObjactEventFlag(OR_05, X16_4);
    IfEventFlag(OR_06, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(OR_07, PASS, OR_05);
    IfConditionGroup(OR_07, PASS, OR_06);
    IfConditionGroup(MAIN, PASS, OR_07);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetObjactState(X12_4, -1, Disabled);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X20_4, ON);
    SetNetworkconnectedEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    GotoIfConditionGroupStateCompiled(Label.LABEL3, PASS, OR_05);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, X24_4);
    SetEventFlag(X28_4, ON);
    ForceAnimationPlayback(X8_4, 3, false, true, true, 0, 1);
    GotoUnconditionally(Label.LABEL4);
    Label3();
    SetNetworkconnectedEventFlag(X24_4, ON);
    WaitFixedTimeSeconds(2);
    SetEventFlag(X28_4, ON);
    ForceAnimationPlayback(X8_4, 3, false, true, true, 0, 1);
    ForceAnimationPlayback(X12_4, 3, false, false, true, 0, 1);
    SetNetworkconnectedEventFlag(X24_4, OFF);
    Label4();
    IfObjectBackread(AND_02, X8_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetEventFlag(X28_4, OFF);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(X20_4, OFF);
    EndUnconditionally(EventEndType.Restart);
    Label9();
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, X20_4);
    EndUnconditionally(EventEndType.Restart);
});

Event(13015202, End, function() {
    InitializeEvent(0, 13015201, 13010300, 13010302, 3011491, 3011490, 3014500, 13011300, 13014300, 13010301);
});

Event(13015210, Restart, function(X0_4, X4_4) {
    IfEventFlag(MAIN, CHANGE, TargetEventFlagType.EventFlag, X0_4);
    WaitFixedTimeFrames(2);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X0_4);
    WaitFixedTimeSeconds(1.3);
    CreateDamagingObject(13015211, X4_4, 40, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    CreateDamagingObject(13015212, X4_4, 41, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    CreateDamagingObject(13015213, X4_4, 42, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    CreateDamagingObject(13015214, X4_4, 43, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    CreateDamagingObject(13015215, X4_4, 44, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    CreateDamagingObject(13015216, X4_4, 45, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    CreateDamagingObject(13015217, X4_4, 46, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    CreateDamagingObject(13015218, X4_4, 47, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    WaitFixedTimeSeconds(2);
    EndUnconditionally(EventEndType.Restart);
});

Event(13015220, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13010461);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, X0_4);
    SetObjactState(X16_4, 304873, Enabled);
    SetObjactState(X8_4, -1, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    IfObjactEventFlag(OR_01, X20_4);
    IfObjactEventFlag(OR_02, X28_4);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, X0_4);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, 3012411, 1);
    IfInoutsideArea(OR_05, InsideOutsideState.Inside, 10000, 3012412, 1);
    IfConditionGroup(OR_06, PASS, OR_01);
    IfConditionGroup(OR_06, PASS, OR_02);
    IfConditionGroup(OR_06, PASS, OR_03);
    IfConditionGroup(OR_06, PASS, OR_04);
    IfConditionGroup(OR_06, PASS, OR_05);
    IfConditionGroup(MAIN, PASS, OR_06);
    SetObjactState(X16_4, -1, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, OR_02);
    ForceAnimationPlayback(X4_4, 21, false, true, true, 0, 1);
    GotoUnconditionally(Label.LABEL2);
    Label0();
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X4_4, 21, false, true, true, 0, 1);
    ForceAnimationPlayback(X16_4, 3, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL2);
    Label1();
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X4_4, 21, false, true, true, 0, 1);
    ForceAnimationPlayback(X24_4, 3, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL2);
    Label2();
    IfAllPlayersInoutsideArea(AND_01, InsideOutsideState.Outside, 3012412);
    IfAllPlayersInoutsideArea(AND_01, InsideOutsideState.Outside, 3012413);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(X4_4, 110, false, true, true, 0, 1);
    ForceAnimationPlayback(X4_4, 10, false, true, true, 0, 1);
    SetEventFlag(X0_4, ON);
    SetObjactState(X8_4, -1, Enabled);
    SetObjactState(X24_4, -1, Disabled);
    EndUnconditionally(EventEndType.Restart);
    Label3();
    SetObjactState(X8_4, 304873, Enabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    IfObjactEventFlag(OR_07, X12_4);
    IfObjactEventFlag(OR_08, X28_4);
    IfEventFlag(OR_09, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfInoutsideArea(OR_10, InsideOutsideState.Inside, 10000, 3012412, 1);
    IfInoutsideArea(OR_11, InsideOutsideState.Inside, 10000, 3012413, 1);
    IfConditionGroup(OR_12, PASS, OR_07);
    IfConditionGroup(OR_12, PASS, OR_08);
    IfConditionGroup(OR_12, PASS, OR_09);
    IfConditionGroup(OR_12, PASS, OR_10);
    IfConditionGroup(OR_12, PASS, OR_11);
    IfConditionGroup(MAIN, PASS, OR_12);
    SetObjactState(X8_4, -1, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    GotoIfConditionGroupStateCompiled(Label.LABEL4, PASS, OR_07);
    GotoIfConditionGroupStateCompiled(Label.LABEL5, PASS, OR_08);
    ForceAnimationPlayback(X4_4, 12, false, true, true, 0, 1);
    GotoUnconditionally(Label.LABEL6);
    Label4();
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X4_4, 12, false, true, true, 0, 1);
    ForceAnimationPlayback(X8_4, 3, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL6);
    Label5();
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X4_4, 12, false, true, true, 0, 1);
    ForceAnimationPlayback(X24_4, 3, false, false, true, 0, 1);
    GotoUnconditionally(Label.LABEL6);
    Label6();
    IfAllPlayersInoutsideArea(AND_02, InsideOutsideState.Outside, 3012411);
    IfAllPlayersInoutsideArea(AND_02, InsideOutsideState.Outside, 3012412);
    IfConditionGroup(MAIN, PASS, AND_02);
    ForceAnimationPlayback(X4_4, 120, false, true, true, 0, 1);
    ForceAnimationPlayback(X4_4, 20, false, true, true, 0, 1);
    SetEventFlag(X0_4, OFF);
    SetObjactState(X16_4, 304873, Enabled);
    SetObjactState(X24_4, -1, Disabled);
    EndUnconditionally(EventEndType.Restart);
});

Event(13015225, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010461);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3012412, 1);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 13010461);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 3012412, 1);
    WaitFixedTimeSeconds(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(13015230, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3012451, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 13015231);
    IfConditionGroup(MAIN, PASS, OR_02);
    ClearCharactersAITarget(3010505);
    SetSpeffect(3010505, 5000);
    ChangeCharacterPatrolBehavior(3010505, 3014300);
    SetEventFlag(13015231, ON);
    IfCharacterAIState(MAIN, 3010505, AIStateType.Combat, ComparisonType.Equal, 1);
    ClearSpeffect(3010505, 5000);
});

// Lothric Priest - Wakeup on area/attack/friend kill trigger
Event(13015310, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, 3, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfCharacterDeadalive(OR_02, 3010418, DeathState.Dead, ComparisonType.Equal, 1); // Lothric Knight
    IfCharacterDeadalive(OR_02, 3010419, DeathState.Dead, ComparisonType.Equal, 1); // Lothric Knight
    IfConditionGroup(MAIN, PASS, OR_02);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_02);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
});

Event(13015470, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfObjectBackread(MAIN, 3011600, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(5);
    ShowObjectByMapCeremony(3011600, 10, 2000);
    ShowObjectByMapCeremony(3011601, 30, 1400);
    ShowObjectByMapCeremony(3011602, 10, 790);
    ShowObjectByMapCeremony(3011605, 20, 1010);
    ShowObjectByMapCeremony(3011606, 40, 710);
    ShowObjectByMapCeremony(3011607, 20, 1400);
    ShowObjectByMapCeremony(3011610, 10, 4320);
    ShowObjectByMapCeremony(3011611, 40, 3800);
    ShowObjectByMapCeremony(3011612, 30, 4420);
    ShowObjectByMapCeremony(3011613, 40, 0);
    ShowObjectByMapCeremony(3011615, 110, 0);
    ShowObjectByMapCeremony(3011616, 110, 290);
    ShowObjectByMapCeremony(3011617, 110, 440);
    ShowObjectByMapCeremony(3011628, 110, 880);
    ShowObjectByMapCeremony(3011631, 110, 1640);
    ShowObjectByMapCeremony(3011620, 120, 470);
    ShowObjectByMapCeremony(3011621, 120, 680);
    ShowObjectByMapCeremony(3011622, 120, 920);
    ShowObjectByMapCeremony(3011629, 120, 1250);
    ShowObjectByMapCeremony(3011632, 120, 2070);
    ShowObjectByMapCeremony(3011625, 130, 1030);
    ShowObjectByMapCeremony(3011626, 130, 1280);
    ShowObjectByMapCeremony(3011627, 130, 1440);
    ShowObjectByMapCeremony(3011630, 130, 1880);
    ShowObjectByMapCeremony(3011633, 130, 2640);
    ShowObjectByMapCeremony(3011636, 10, 3100);
    ShowObjectByMapCeremony(3011637, 20, 2500);
    ShowObjectByMapCeremony(3011638, 40, 2300);
    ShowObjectByMapCeremony(3011639, 10, 2110);
    ShowObjectByMapCeremony(3011640, 20, 1920);
    ShowObjectByMapCeremony(3011641, 30, 2400);
    ShowObjectByMapCeremony(3011642, 40, 4790);
    ShowObjectByMapCeremony(3011643, 20, 4900);
    ShowObjectByMapCeremony(3011644, 30, 5490);
    ShowObjectByMapCeremony(3011645, 110, 1000);
    ShowObjectByMapCeremony(3011646, 110, 1290);
    ShowObjectByMapCeremony(3011647, 110, 1440);
    ShowObjectByMapCeremony(3011648, 110, 1880);
    ShowObjectByMapCeremony(3011649, 110, 2640);
    ShowObjectByMapCeremony(3011650, 120, 1470);
    ShowObjectByMapCeremony(3011651, 120, 1680);
    ShowObjectByMapCeremony(3011652, 120, 1920);
    ShowObjectByMapCeremony(3011653, 120, 2250);
    ShowObjectByMapCeremony(3011654, 120, 3200);
    ShowObjectByMapCeremony(3011655, 130, 2030);
    ShowObjectByMapCeremony(3011656, 130, 2280);
    ShowObjectByMapCeremony(3011657, 130, 2440);
    ShowObjectByMapCeremony(3011658, 130, 2880);
    ShowObjectByMapCeremony(3011659, 130, 3640);
    IfObjectBackread(MAIN, 3011600, false, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    EndUnconditionally(EventEndType.Restart);
});

Event(13015475, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    WaitFixedTimeSeconds(0.1);
    IssueShortWarpRequest(3010501, TargetEntityType.Area, 3012510, -1);
    IssueShortWarpRequest(3010502, TargetEntityType.Area, 3012511, -1);
    IssueShortWarpRequest(3010538, TargetEntityType.Area, 3012512, -1);
});

// Corrupted Wyvern (Left) - Setup
Event(13015550, Restart, function(X0_4) {
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010895);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13010890);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13010580);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterImmortality(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 30000, true, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 13010580);
    WaitFixedTimeSeconds(0);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterImmortality(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 20006, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterImmortality(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 30002, true, false, false, 0, 1);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    WaitFixedTimeFrames(1);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.Every5Frames);
});

// Corrupted Wyvern (Right) - Setup
Event(13015551, Restart, function(X0_4) {
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010896);
    ChangeCharacterEnableState(X0_4, Enabled);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 13010891);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterImmortality(X0_4, Enabled);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 13010891);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 13010580);
    ForceAnimationPlayback(X0_4, 30000, true, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    ForceAnimationPlayback(X0_4, 30001, true, false, false, 0, 1);
    IfCharacterType(OR_15, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_15, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_15);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3012320, 1);
    IfDamageType(AND_02, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    ForceAnimationPlayback(X0_4, 20004, false, false, false, 0, 1);
    SetEventFlag(13010580, ON);
    SetEventFlag(9420, ON);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 30002, true, false, false, 0, 1);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    WaitFixedTimeFrames(1);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.Every5Frames);
});

// Corrupted Wyvern - Control Pus of Man State
Event(13015555, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010890);
    CreateNPCPart(3010831, 10, NPCPartType.Part3, 500, 1, 1, false, false); // Corrupted Wyvern (Right)
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13015550);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13015551);
    IfConditionGroup(MAIN, PASS, AND_01);
    CreateNPCPart(3010830, 10, NPCPartType.Part3, 500, 1, 1, false, false); // Corrupted Wyvern (Left)
    IfNPCPartHP(OR_01, 3010830, 10, 1, ComparisonType.LessOrEqual);
    IfNPCPartHP(OR_01, 3010831, 10, 1, ComparisonType.LessOrEqual);
    IfCharacterHPRatio(OR_01, 3010830, ComparisonType.LessOrEqual, 0.001, ComparisonType.Equal, 1);
    IfCharacterHPRatio(OR_01, 3010831, ComparisonType.LessOrEqual, 0.001, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetEventFlag(13010890, ON);
    IfNPCPartHP(AND_01, 3010830, 10, 0, ComparisonType.LessOrEqual);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    IfNPCPartHP(AND_02, 3010831, 10, 0, ComparisonType.LessOrEqual);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_02);
    IfCharacterHPRatio(AND_03, 3010830, ComparisonType.LessOrEqual, 0.001, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_03);
    IfCharacterHPRatio(AND_04, 3010831, ComparisonType.LessOrEqual, 0.001, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_04);
    Label0();
    SetCharacterHPBarDisplay(3010830, Disabled);
    SetLockOnPoint(3010830, 220, Disabled);
    ForceAnimationPlayback(3010830, 20005, false, false, false, 0, 1);
    SetCharacterAnimationState(3010830, Disabled);
    WaitFixedTimeSeconds(3);
    SetCharacterHPBarDisplay(3010831, Disabled);
    SetLockOnPoint(3010831, 220, Disabled);
    SetCharacterAnimationState(3010831, Disabled);
    ForceAnimationPlayback(3010831, 20005, false, true, false, 0, 1);
    SetNetworkUpdateRate(3010830, true, CharacterUpdateFrequency.Every5Frames);
    SetNetworkUpdateRate(3010831, true, CharacterUpdateFrequency.Every5Frames);
    EndUnconditionally(EventEndType.End);
    Label1();
    SetCharacterHPBarDisplay(3010831, Disabled);
    SetLockOnPoint(3010831, 220, Disabled);
    ForceAnimationPlayback(3010831, 20005, false, false, false, 0, 1);
    SetCharacterAnimationState(3010831, Disabled);
    WaitFixedTimeSeconds(3);
    SetCharacterHPBarDisplay(3010830, Disabled);
    SetLockOnPoint(3010830, 220, Disabled);
    SetCharacterAnimationState(3010830, Disabled);
    ForceAnimationPlayback(3010830, 20005, false, true, false, 0, 1);
    SetNetworkUpdateRate(3010830, true, CharacterUpdateFrequency.Every5Frames);
    SetNetworkUpdateRate(3010831, true, CharacterUpdateFrequency.Every5Frames);
    EndUnconditionally(EventEndType.End);
});

// Corrupted Wyvern (Left) - Spawn and Treasure Control
Event(13015556, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X12_4);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X8_4);
    ForceAnimationPlayback(X0_4, 700, true, false, false, 0, 1);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X8_4);
    SetCharacterAIState(X0_4, Enabled);
    SetLockOnPoint(X0_4, 220, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 1700, false, false, false, 0, 1);
    Label0();
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    SetLockOnPoint(X0_4, 220, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SetEventFlag(X4_4, ON);
    SetNetworkUpdateRate(3010830, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(3010830, 20007, false, false, true, 0, 1);
    WaitFixedTimeSeconds(6.8);
    ForceCharacterDeath(3010830, true);
    ChangeCharacterEnableState(3010830, Disabled);
    SetCharacterAnimationState(3010830, Disabled);
    SetNetworkUpdateRate(3010830, false, CharacterUpdateFrequency.NoUpdate);
    AwardItemLot(31411000);
});

// Corrupted Wyvern (Right) - Spawn and Treasure Control
Event(13015557, Restart, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X4_4);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X8_4);
    ForceAnimationPlayback(X0_4, 700, true, false, false, 0, 1);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X8_4);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    SetLockOnPoint(X0_4, 220, Enabled);
    ForceAnimationPlayback(X0_4, 1700, false, true, false, 0, 1);
    Label0();
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    SetLockOnPoint(X0_4, 220, Enabled);
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SetEventFlag(X4_4, ON);
    SetNetworkUpdateRate(3010831, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(3010831, 20007, false, false, true, 0, 1);
    WaitFixedTimeSeconds(6.8);
    ForceCharacterDeath(3010831, true);
    ChangeCharacterEnableState(3010831, Disabled);
    SetCharacterAnimationState(3010831, Disabled);
    SetNetworkUpdateRate(3010831, false, CharacterUpdateFrequency.NoUpdate);
    AwardItemLot(31411100);
});

// Corrupted Wyvern (Left) - Warp
Event(13015558, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterBackreadStatus(MAIN, X0_4, true, ComparisonType.Equal, 1);
    CharacterWarpRequest(X0_4, TargetEntityType.Character, X4_4, X12_4);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, 10, 1);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
    WaitFixedTimeFrames(5);
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Wyvern (Right) - Warp
Event(13015559, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X8_4);
    IfCharacterBackreadStatus(MAIN, X0_4, true, ComparisonType.Equal, 1);
    CharacterWarpRequest(X0_4, TargetEntityType.Character, X4_4, X12_4);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 10000, X0_4, 10, 1);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.Restart);
    WaitFixedTimeFrames(5);
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Wyvern (Left) - Set Effect on Wakeup
Event(13015580, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010890);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3012300, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(3010830, 11021);
    SetSpeffect(3010830, 11023);
    WaitFixedTimeFrames(190);
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Wyvern (Left) - Set Effect on Wakeup
Event(13015581, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010890);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3012310, 1);
    IfDamageType(OR_01, 3010830, -1, DamageType.Unspecified);
    IfDamageType(OR_01, 3010831, -1, DamageType.Unspecified);
    IfConditionGroup(AND_02, PASS, AND_01);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetSpeffect(3010830, 11022);
    WaitFixedTimeFrames(190);
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Wyvern (Right) - Set Effect on Wakeup
Event(13015585, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010890);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3012300, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 3012301, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(3010831, 11031);
    SetSpeffect(3010831, 11032);
    WaitFixedTimeFrames(150);
    EndUnconditionally(EventEndType.Restart);
});

// Corrupted Wyvern - Flag
Event(13015590, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    IfCharacterHasEventMessage(MAIN, X4_4, X8_4, true, ComparisonType.Equal, 1);
    SetEventFlag(X0_4, ON);
});

// Dragonslayer Armour - Boss Start
Event(13015810, Restart, function() {
    SetCharacterAIState(3010800, Disabled);
    ChangeCharacterEnableState(3010800, Disabled);
    SetCharacterAnimationState(3010800, Disabled);
    SetCharacterGravity(3010800, Disabled);
    SetCharacterGravity(3010801, Disabled);
    SetCharacterMaphit(3010801, true);
    SetCharacterGravity(3010802, Disabled);
    SetCharacterMaphit(3010802, true);
    SetCharacterAIState(3010801, Disabled);
    ChangeCharacterEnableState(3010801, Disabled);
    SetCharacterAnimationState(3010801, Disabled);
    SetCharacterAIState(3010802, Disabled);
    ChangeCharacterEnableState(3010802, Disabled);
    SetCharacterAnimationState(3010802, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010800);
    ChangeCharacterEnableState(3010800, Enabled);
    ChangeCharacterEnableState(3010801, Enabled);
    SetCharacterAnimationState(3010801, Enabled);
    ChangeCharacterEnableState(3010802, Enabled);
    SetCharacterAnimationState(3010802, Enabled);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ForceAnimationPlayback(3010800, 700, true, false, false, 0, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13015805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3012830, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(3010800, 1700, false, false, false, 0, 1);
    
    Label0();
    SetCharacterGravity(3010800, Enabled);
    SetCharacterAnimationState(3010800, Enabled);
    SetCharacterAIState(3010800, Enabled);
    SetNetworkUpdateRate(3010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(3010800);
    ActivateMultiplayerdependantBuffs(3010801);
    ActivateMultiplayerdependantBuffs(3010802);
    SkipIfNumberOfClientsOfType(3, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkUpdateAuthority(3010800, AuthorityLevel.Forced);
    SetNetworkUpdateAuthority(3010801, AuthorityLevel.Forced);
    SetNetworkUpdateAuthority(3010802, AuthorityLevel.Forced);
    DisplayBossHealthBar(Enabled, 3010800, 0, 903160);
    InitializeCommonEvent(20020113, 0); // Boss Start
});

// Dragonslayer Armour - Enable Pilgrim Angels
Event(13015811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010800);
    SetCharacterInvincibility(3010801, Enabled);
    SetCharacterInvincibility(3010802, Enabled);
    IfCharacterHPRatio(AND_01, 3010800, ComparisonType.LessOrEqual, 0.7, ComparisonType.Equal, 1);
    IfCharacterDamagedBy(AND_01, 3010800, 10000);
    IfConditionGroup(MAIN, PASS, AND_01);
    ForceAnimationPlayback(3010800, 20000, false, true, false, 0, 1);
    SetNetworkUpdateRate(3010801, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(3010801, Enabled);
    SetNetworkUpdateRate(3010802, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(3010802, Enabled);
    SetCharacterInvincibility(3010801, Disabled);
    SetCharacterInvincibility(3010802, Disabled);
});

// Dragonslayer Armour Kill
Event(13015812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010800);
    IfCharacterHPRatio(MAIN, 3010800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(3.5);
    PlaySE(3010800, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 3010800, DeathState.Dead, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(3.5);
    DisplayBossHealthBar(Disabled, 3010800, 0, 903160);
    DeactivateObject(3011800, Disabled);
    HandleBossDefeat(3010800);
    SetNetworkUpdateRate(3010800, false, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCamera(-1, -1);
    ForceCharacterDeath(3010801, false);
    SetNetworkUpdateRate(3010801, false, CharacterUpdateFrequency.AlwaysUpdate);
    ForceCharacterDeath(3010802, false);
    SetNetworkUpdateRate(3010802, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetEventFlag(13010800, ON);
    SetEventFlag(9308, ON);
    SetEventFlag(6308, ON);
    InitializeCommonEvent(20020013, 0); // Boss Kill
});

// Dragonslayer Armour - Change Camera
Event(13015815, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010800);
    SetNetworkSyncState(Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 13015805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 3012830, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCamera(3160, 3160);
});

// Pilgrim Angel - Animation during Dragonslayer Armour fight
Event(13015830, Restart, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 13010800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 30000, true, false, false, 0, 1);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 3012830, 1);
    WaitFixedTimeSeconds(X4_4);
    ForceAnimationPlayback(X0_4, 20000, false, true, false, 0, 1);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(X0_4, Disabled);
});

Event(13015820, Restart, function() {
    // Dragonslayer Armour - Enter Boss Room
    InitializeCommonEvent(20005800, 13010800, 3011800, 3012801, 13015805, 3011800, 0, 0, 3012800);
    // Dragonslayer Armour - Enter Boss Room (Client)
    InitializeCommonEvent(20005801, 13010800, 3011800, 3012801, 13015805, 3011800, 13015806);
    // Dragonslayer Armour - Boss Sound State
    InitializeCommonEvent(20001836, 13010800, 13015805, 13015806, 13015810, 3012803, 3012804, 13015811);
    // Dragonslayer Armour - Toggle Fogwall State
    InitializeCommonEvent(20005820, 13010800, 3011800, 3, 0);
    InitializeCommonEvent(20005820, 13010800, 3011801, 3, 0);
    // Boss - Enter Fogwall
    InitializeCommonEvent(20005810, 13010800, 3011800, 3012801, 10000);
});

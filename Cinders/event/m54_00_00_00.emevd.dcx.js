// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    // Arena Setup
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25000062)
    InitializeEvent(0, 15400000, 0);
    DeactivateGenerator(5409000, Disabled);
    
    // Trial of Sorrow
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 25000062)
    SetEventFlag(25000062, OFF);
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 15401000, 0);
    
    // Generators
    DeactivateGenerator(5409001, Disabled);
    DeactivateGenerator(5409002, Disabled);
    DeactivateGenerator(5409003, Disabled);
    DeactivateGenerator(5409004, Disabled);
    
    // Boss
    SetCharacterAnimationState(5400910, Disabled);
    ChangeCharacterEnableState(5400910, Disabled);
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 5400750); // Companion 1
    InitializeCommonEvent(20080000, 5400751); // Companion 2
    InitializeCommonEvent(20080000, 5400752); // Companion 3
    InitializeCommonEvent(20080000, 5400753); // Companion 4
    InitializeCommonEvent(20080000, 5400754); // Companion 5
    InitializeCommonEvent(20080000, 5400755); // Companion 6
    InitializeCommonEvent(20080000, 5400756); // Companion 7
    InitializeCommonEvent(20080000, 5400757); // Companion 8
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 54, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 5400750, 160760000, 160760200, 54, 0); // Companion 1
    InitializeCommonEvent(20080001, 5400751, 160760001, 160760200, 54, 0); // Companion 2
    InitializeCommonEvent(20080001, 5400752, 160760002, 160760200, 54, 0); // Companion 3
    InitializeCommonEvent(20080001, 5400753, 160760003, 160760200, 54, 0); // Companion 4
    InitializeCommonEvent(20080001, 5400754, 160760004, 160760200, 54, 0); // Companion 5
    InitializeCommonEvent(20080001, 5400755, 160760005, 160760200, 54, 0); // Companion 6
    InitializeCommonEvent(20080001, 5400756, 160760006, 160760200, 54, 0); // Companion 7
    InitializeCommonEvent(20080001, 5400757, 160760007, 160760200, 54, 0); // Companion 8
});

// Arena
Event(15400000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 15405300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 15405300);
    InitializeCommonEvent(20005941, 15405300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 15405300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 15405300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 15405300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 15405300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 15405300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 15405300);
});

// Trial
Event(15401000, Default, function() {
    InitializeEvent(0, 15401010, 0); // Trial
    InitializeEvent(0, 15401020, 0); // Setup Wave Entity
    InitializeEvent(0, 15401030, 0); // Setup Wave Damage
    InitializeEvent(0, 15401040, 0); // Setup Enemy Effects
});

// Trial
Event(15401010, Default, function() {
    WaitFixedTimeSeconds(5.0);
    
    // Wave 1 - Irithyllian Slaves
    InitializeEvent(0, 15401011, 5409001, 260200200, 205010); 

    IfCharacterHPRatio(MAIN, 5400900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500100);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 2 - Priestly Onslaught
    InitializeEvent(0, 15401011, 5409002, 260200201, 205011); 

    IfCharacterHPRatio(MAIN, 5400900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500110);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 3 - Monstrosities of Sin
    InitializeEvent(0, 15401011, 5409003, 260200202, 205012); 

    IfCharacterHPRatio(MAIN, 5400900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500120);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 4 - Guardians of Irithyll
    InitializeEvent(0, 15401011, 5409004, 260200203, 205013); 

    IfCharacterHPRatio(MAIN, 5400900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500130);
    
    WaitFixedTimeSeconds(10.0);
    
    // Boss - The Lost Knight
    InitializeEvent(0, 15401012, 5400910, 260200204, 205014); 
    
    IfCharacterHPRatio(MAIN, 5400900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500140);
    
    WaitFixedTimeSeconds(10.0);
    
    // Return
    WarpPlayer(40, 0, 4000970);
});

// Wave State - Wave
Event(15401011, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5400900, X4_4);
    DisplayBossHealthBar(Enabled, 5400900, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    IfCharacterHPRatio(MAIN, 5400900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 5400900, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    
    WaitFixedTimeSeconds(5.0);
});

// Wave State - Boss
Event(15401012, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5400900, X4_4);
    DisplayBossHealthBar(Enabled, 5400900, 0, X8_4);
    
    SetCharacterAnimationState(X0_4, Enabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 280, 1060);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 905290);
    
    WaitFixedTimeSeconds(5.0);
});

// Setup Wave Entity
Event(15401020, Default, function() {
    SetCharacterAIState(5400900, Disabled);
    SetCharacterGravity(5400900, Disabled);
    SetCharacterAnimationState(5400900, Disabled);
    SetLockOnPoint(5400900, 220, Disabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Setup Wave Damage
Event(15401030, Default, function() {
    // Setup mechanics
    SkipIfCharacterHasSpeffect(3, 5405761, 260200010, true, ComparisonType.Equal, 1);
    CreateReferredDamagePair(5405761, 5400900); // Tie HP to Wave HP
    SetCharacterAIState(5405761, Enabled); // Enable AI
    SetSpeffect(5405761, 260200010);
    
    // Kill enemy if Wave is over
    IfCharacterHPRatio(AND_01, 5400900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetSpeffect(5405761, 260200002);

    EndUnconditionally(EventEndType.Restart);
});

// Setup Enemy Effects
Event(15401040, Default, function() {
    InitializeCommonEvent(20081010, 5405761, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 5405761, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 5405761, 250001403, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 5405761, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 5405761, 250001202, 25000157); // Curse of Frailty
    
    // Status Aux
    InitializeCommonEvent(20090200, 5405761, 112610); // Frostbite
    
    SetSpeffect(5405761, 260200290); // General Scaling

    EndUnconditionally(EventEndType.Restart);
});

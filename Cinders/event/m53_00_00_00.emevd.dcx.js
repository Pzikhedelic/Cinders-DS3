// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    // Arena Steup
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25000060)
    InitializeEvent(0, 15300000, 0);
    DeactivateGenerator(5309000, Disabled);
    
    // Trial of Adversity
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 25000060)
    SetEventFlag(25000060, OFF);
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 15301000, 0);
    
    // Generators
    DeactivateGenerator(5309001, Disabled);
    DeactivateGenerator(5309002, Disabled);
    DeactivateGenerator(5309003, Disabled);
    DeactivateGenerator(5309004, Disabled);
    
    // Boss
    SetCharacterAnimationState(5300910, Disabled);
    ChangeCharacterEnableState(5300910, Disabled);
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 5300750); // Companion 1
    InitializeCommonEvent(20080000, 5300751); // Companion 2
    InitializeCommonEvent(20080000, 5300752); // Companion 3
    InitializeCommonEvent(20080000, 5300753); // Companion 4
    InitializeCommonEvent(20080000, 5300754); // Companion 5
    InitializeCommonEvent(20080000, 5300755); // Companion 6
    InitializeCommonEvent(20080000, 5300756); // Companion 7
    InitializeCommonEvent(20080000, 5300757); // Companion 8
   
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 53, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 5300750, 160760000, 160760200, 53, 0); // Companion 1
    InitializeCommonEvent(20080001, 5300751, 160760001, 160760200, 53, 0); // Companion 2
    InitializeCommonEvent(20080001, 5300752, 160760002, 160760200, 53, 0); // Companion 3
    InitializeCommonEvent(20080001, 5300753, 160760003, 160760200, 53, 0); // Companion 4
    InitializeCommonEvent(20080001, 5300754, 160760004, 160760200, 53, 0); // Companion 5
    InitializeCommonEvent(20080001, 5300755, 160760005, 160760200, 53, 0); // Companion 6
    InitializeCommonEvent(20080001, 5300756, 160760006, 160760200, 53, 0); // Companion 7
    InitializeCommonEvent(20080001, 5300757, 160760007, 160760200, 53, 0); // Companion 8
});

// Arena
Event(15300000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 15305300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 15305300);
    InitializeCommonEvent(20005941, 15305300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 15305300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 15305300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 15305300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 15305300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 15305300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 15305300);
});

// Trial
Event(15301000, Default, function() {
    InitializeEvent(0, 15301010, 0); // Trial
    InitializeEvent(0, 15301020, 0); // Setup Wave Entity
    InitializeEvent(0, 15301030, 0); // Setup Wave Damage
    InitializeEvent(0, 15301040, 0); // Setup Enemy Effects
});

// Trial
Event(15301010, Default, function() {
    WaitFixedTimeSeconds(5.0);
    
    // Wave 1 - Dogs Amok
    InitializeEvent(0, 15301011, 5309001, 260200100, 205000); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500000);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 2 - The Bone Gang
    InitializeEvent(0, 15301011, 5309002, 260200101, 205001); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500010);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 3 - Rock'n'Roll
    InitializeEvent(0, 15301011, 5309003, 260200102, 205002); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500020);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 4 - Serpentine Swarm
    InitializeEvent(0, 15301011, 5309004, 260200103, 205003); 

    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500030);
    
    WaitFixedTimeSeconds(10.0);
    
    // Boss - The Dragon Knight
    InitializeEvent(0, 15301012, 5300910, 260200104, 205004); 
    
    IfCharacterHPRatio(MAIN, 5300910, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500040);
    
    WaitFixedTimeSeconds(10.0);
    
    // Return
    WarpPlayer(40, 0, 4000970);
});

// Wave State - Wave
Event(15301011, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5300900, X4_4);
    DisplayBossHealthBar(Enabled, 5300900, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    IfCharacterHPRatio(MAIN, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 5300900, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    
    WaitFixedTimeSeconds(5.0);
});

// Wave State - Boss
Event(15301012, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5300900, X4_4);
    DisplayBossHealthBar(Enabled, 5300900, 0, X8_4);
    
    SetCharacterAnimationState(X0_4, Enabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 280, 1060);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 905290);
    
    WaitFixedTimeSeconds(5.0);
});

// Setup Wave Entity
Event(15301020, Default, function() {
    SetCharacterAIState(5300900, Disabled);
    SetCharacterGravity(5300900, Disabled);
    SetCharacterAnimationState(5300900, Disabled);
    SetLockOnPoint(5300900, 220, Disabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Setup Wave Damage
Event(15301030, Default, function() {
    // Setup mechanics
    SkipIfCharacterHasSpeffect(3, 5305761, 260200010, true, ComparisonType.Equal, 1);
    CreateReferredDamagePair(5305761, 5300900); // Tie HP to Wave HP
    SetCharacterAIState(5305761, Enabled); // Enable AI
    SetSpeffect(5305761, 260200010);
    
    // Kill enemy if Wave is over
    IfCharacterHPRatio(AND_01, 5300900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetSpeffect(5305761, 260200002);

    EndUnconditionally(EventEndType.Restart);
});

// Setup Enemy Effects
Event(15301040, Default, function() {
    InitializeCommonEvent(20081010, 5305761, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 5305761, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 5305761, 250001403, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 5305761, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 5305761, 250001202, 25000157); // Curse of Frailty
    
    // Status Aux
    InitializeCommonEvent(20090200, 5305761, 112610); // Frostbite
    
    SetSpeffect(5305761, 260200190); // General Scaling

    EndUnconditionally(EventEndType.Restart);
});

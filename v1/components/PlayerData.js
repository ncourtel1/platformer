// export const PlayerData = {
//    // Gravity
//    gravityStrength: 0,
//    gravityScale: 0,
//    fallGravityMult: 1.5,
//    maxFallSpeed: 15,
//    fastFallGravityMult: 2.5,
//    maxFastFallSpeed: 25,
 
//    // Run
//    runMaxSpeed: 10,
//    runAcceleration: 5,
//    runDecceleration: 5,
//    accelInAir: 0.5,
//    deccelInAir: 0.5,
//    doConserveMomentum: true,
 
//    // Jump
//    jumpHeight: 5,
//    jumpTimeToApex: 0.5,
//    jumpCutGravityMult: 2,
//    jumpForce: 0,
 
//    // Wall Jump
//    wallJumpForce: { x: 10, y: 15 },
//    wallJumpRunLerp: 0.5,
//    wallJumpTime: 0.3,
 
//    // Slide
//    slideSpeed: 5,
//    slideAccel: 1,
 
//    // Assists
//    coyoteTime: 0.2,
//    jumpInputBufferTime: 0.2,
//  };
 
//  // Calculs dynamiques
//  PlayerData.gravityStrength = -(2 * PlayerData.jumpHeight) / Math.pow(PlayerData.jumpTimeToApex, 2);
//  PlayerData.gravityScale = PlayerData.gravityStrength / 9.81; // Simule Physics2D.gravity.y
//  PlayerData.jumpForce = Math.abs(PlayerData.gravityStrength) * PlayerData.jumpTimeToApex;

export default {
  gravity: 2000,         // Force de gravité
  jumpForce: 800,        // Force de saut
  maxFallSpeed: 900,     // Vitesse maximale en chute
  runSpeed: 300,         // Vitesse de course
  airControl: 0.5,       // Contrôle en l'air
};
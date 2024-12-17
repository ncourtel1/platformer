export const PlayerData = {
   // Gravity
   gravityStrength: 0,
   gravityScale: 0,
   fallGravityMult: 1.5,
   maxFallSpeed: 25,
   fastFallGravityMult: 2,
   maxFastFallSpeed: 30,
 
   // Run
   runMaxSpeed: 11,
   runAcceleration: 2.5,
   runDecceleration: 5,
   accelInAir: 0.65,
   deccelInAir: 0.65,
   doConserveMomentum: true,
 
   // Jump
   jumpHeight: 3.5,
   jumpTimeToApex: 0.3,
   jumpCutGravityMult: 2,
   jumpHangTimeThreshold: 1,
   jumpHangAccelerationMult: 1.1,
   jumpHangMaxSpeedMult: 1.3,
   jumpForce: 0,
 
   // Wall Jump
   wallJumpForce: { x: 15, y: 25 },
   wallJumpRunLerp: 0.5,
   wallJumpTime: 0.15,
 
   // Slide
   slideSpeed: 0,
   slideAccel: 0,
 
   // Assists
   coyoteTime: 0.1,
   jumpInputBufferTime: 0.1,
 };
 
 // Calculs dynamiques
 PlayerData.gravityStrength = -(2 * PlayerData.jumpHeight) / Math.pow(PlayerData.jumpTimeToApex, 2);
 PlayerData.gravityScale = PlayerData.gravityStrength / 9.81; // Simule Physics2D.gravity.y
 PlayerData.jumpForce = Math.abs(PlayerData.gravityStrength) * PlayerData.jumpTimeToApex;
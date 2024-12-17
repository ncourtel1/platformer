export default MovementComponent = {
   gravityStrength: 0,          // Calculé dynamiquement
   gravityScale: 1,
   fallGravityMult: 1.5,
   maxFallSpeed: 10,
   fastFallGravityMult: 2,
   maxFastFallSpeed: 15,
   runMaxSpeed: 8,
   runAcceleration: 50,
   runDecceleration: 50,
   accelInAir: 0.5,
   deccelInAir: 0.5,
   jumpHeight: 3,
   jumpTimeToApex: 0.5,
   jumpForce: 0,                // Calculé dynamiquement
   slideSpeed: 5,
   slideAccel: 10,
   jumpCutGravityMult: 1.5,
   jumpHangGravityMult: 0.5,
   jumpHangTimeThreshold: 1,
};
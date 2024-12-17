export class StateComponent {
   constructor(){
      this.isGrounded = false,
      this.isJumping = false,
      this.isFalling = false,
      this.isWallJumping = false,
      this.isWallSliding = false,
      this.isSliding = false,
      this.isFacingRight = true,
      this.doTurnOnWallJump = false,
      this.isJumpCut = false,
      this.isJumpFalling = false
      this.lastOnGroundTime = 0, // Coyote Time
      this.lastOnWallTime = 0,
      this.lastOnWallRightTime = 0,
      this.lastOnWallLeftTime = 0,
      this.lastJumpTime = 0,
      this.lastOnWallJump = 0
      this.lastOnWallRightTime = 0,
      this.lastOnWallLeftTime = 0,
      this.wallJumpStartTime = 0,
      this.lastWallJumpDir = 0,
      this.lastPressedJumpTime = 0
   }
};
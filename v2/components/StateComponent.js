export class StateComponent {
   constructor(){
      this.isGrounded = false,
      this.isJumping = false,
      this.isFalling = false,
      this.isWallSliding = false,
      this.isFacingRight = true,
      this.lastGroundTime = 0, // Coyote Time
      this.lastJumpTime = 0,
      this.lastWallJump = 0
   }
};
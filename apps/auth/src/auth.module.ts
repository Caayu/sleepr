import { Module } from '@nestjs/common';
import { LoggerModule } from '@app/common';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

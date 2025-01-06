import { IsNotEmpty, IsString, IsDecimal, IsOptional } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  eventName: string;

  @IsNotEmpty()
  @IsString()
  eventDescription: string;

  @IsNotEmpty()
  eventDate: string;

  @IsOptional()
  @IsString()
  eventPhoto?: string;
}
import { IsNotEmpty } from 'class-validator';

export class CreateNinjasDto {
  @IsNotEmpty()
  name: string;
  age: number;
  village: string;
}

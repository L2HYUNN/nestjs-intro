import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: 'abcd',
    description: 'id',
    required: true,
  })
  id: string;

  @ApiProperty({
    example: 'abcd@kakao.com',
    description: 'email',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'abcd',
    description: 'name',
    required: true,
  })
  name: string;
}

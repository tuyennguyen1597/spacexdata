import { Expose, Transform, TransformFnParams, Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { type } from "os";

export class FilterShipDTO {
    @IsOptional()
    @IsString()
    @Expose({ toPlainOnly: true, name: 'type' })
    @Transform(({ value }: TransformFnParams) => (value !== null && value !== '' ? value : undefined), {
        toPlainOnly: true,
    })
    type: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    weight: number;

    @IsOptional()
    @IsString()
    @Expose({ toPlainOnly: true })
    @Transform(({ value }: TransformFnParams) => (value !== null && value !== '' ? value : undefined), {
        toPlainOnly: true,
    })
    homePort: string;
}
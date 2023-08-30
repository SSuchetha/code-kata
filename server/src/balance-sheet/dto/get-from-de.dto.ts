import { ApiProperty } from '@nestjs/swagger'

export class GetFromDecisionEngineDto {
    
    @ApiProperty()
    business_name: string;

    @ApiProperty()
    year: number

    @ApiProperty()
    loan_amount: number

    @ApiProperty()
    profitOrLossSummary: number

    @ApiProperty()
    assetValue: number

    @ApiProperty()
    account_provider: number
}

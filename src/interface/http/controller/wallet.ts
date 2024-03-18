import { WalletService } from '@application/service'
import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common'

@Controller('wallet')
export class WalletController {
    constructor(private walletService: WalletService) {}

    @Get('balance')
    async getBalance(@Param('address') address: string) {
        return await this.walletService.getBalance(address)
    }
}

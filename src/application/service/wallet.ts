import { Injectable } from '@nestjs/common'
import { eth } from '@infra/third-party'

@Injectable()
export class WalletService {
    async getBalance(address: string) {
        return await eth.getWalletBalance(address)
    }
}

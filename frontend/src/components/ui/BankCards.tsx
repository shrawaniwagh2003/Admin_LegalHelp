import Link from 'next/link'
import React from 'react'
import { formatAmount } from '../../../lib/utils'
import Image from 'next/image'
import masterCard from '../../../src/public/icons/mastercard.svg'
import pay from '../../../src/public/icons/Paypass.svg'
import lines from '../../public/icons/lines.png'

const BankCards = ({account,userName,showBalance = true}: BankDropdownProps) => {
  return (
    <div className='flex flex-col '>
        <Link href="/" className='bank-card'>
        
        <div className='bank-card_content'>
            <div>
                <h1 className='text-16 font-semibold text-white'>{account.name || userName}</h1>
                <p className='font-font-ibm-plex-serif font-black text-white'>
                    {formatAmount(account.currentBalance)}
                </p>
            </div>

        <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <h1 className='text-12 font-semibold text-white'>{userName}</h1>
                    <h2 className='text-12 font-semibold text-white'> ◍◍ / ◍◍ </h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>◍◍◍◍ ◍◍◍◍ ◍◍◍◍ <span className='text-16'>${account.mask}</span></p>
        </article>

        </div>
            <div className='bank-card_icon'>

                <Image
                src={pay}
                width={20}
                height={24}
                alt='pay'
                />

                <Image
                src={masterCard}
                width={45}
                height={32}
                alt='mastercard'
                />

                <Image
                src={lines}
                width={316}
                height={190}
                alt='line'
                className='absolute top-0 left-0'/>

            </div>
    </Link>    
    </div>
  )
}

export default BankCards;
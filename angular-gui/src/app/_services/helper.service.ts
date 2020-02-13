import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  roleSchema = [
    {
      id: 0,
      code: 'nguoimoi',
      name: 'Người mới'
    },
    {
      id: 1,
      code: 'admin',
      name: 'ADMIN'
    },
    {
      id: 4,
      code: 'quanlykho',
      name: 'Quản lý kho'
    },
    {
      id: 7,
      code: 'nguoikiemhang',
      name: 'Người kiểm hàng'
    },
    {
      id: 9,
      code: 'nguoidonggoi',
      name: 'Người đóng gói'
    },
    {
      id: 12,
      code: 'CTVban',
      name: 'Cộng tác viên bán'
    },
    {
      id: 14,
      code: 'quanlyCTVban',
      name: 'Quản lý CTV bán'
    },
    {
      id: 16,
      code: 'CTVmua',
      name: 'Cộng tác viên mua'
    },
    {
      id: 18,
      code: 'quanlyCTVmua',
      name: 'Quản lý CTV mua'
    }
  ];
  sellStatus = [
    {
      id: 0,
      english: 'DRAFT',
      vietnamese: 'đơn nháp'
    },
    {
      id: 1,
      english: 'NEW',
      vietnamese: 'đơn mới'
    },
    {
      id: 2,
      english: 'PREPARED',
      vietnamese: 'đã nhặt đủ hàng để chờ đóng gói'
    },
    {
      id: 3,
      english: 'UNPREPARED',
      vietnamese:
        'chưa nhặt được hàng vì lý do nào đó (ghi lý do vào noteWarehouse)'
    },
    {
      id: 4,
      english: 'PACKED',
      vietnamese: 'đã đóng gói'
    },
    {
      id: 5,
      english: 'SHIPPED',
      vietnamese: 'đã gửi đi'
    },
    {
      id: 6,
      english: 'DELIVERED',
      vietnamese: 'khách đã nhận'
    },
    {
      id: 7,
      english: 'RETURNING',
      vietnamese: 'đang hoàn hàng'
    },
    {
      id: 8,
      english: 'RETURNED',
      vietnamese: 'đã hoàn'
    },
    {
      id: 9,
      english: 'PAID',
      vietnamese: 'đã thanh toán'
    },
    {
      id: 10,
      english: 'REFUNDED',
      vietnamese: 'đã hoàn tiền'
    },
    {
      id: 11,
      english: 'CANCELED',
      vietnamese: 'đã hủy'
    }
  ];

  constructor(
    private snackBar: MatSnackBar,
    private afauth: AngularFireAuth
  ) { }

  async getToken() {
    let token = '';
    // const check = await this.auth.waitSign();
    // if (check !== null) {

    await this.afauth.auth.currentUser
      .getIdToken()
      .then(tokenId => (token = tokenId));
    // }
    return token;
  }

  openSnackBar(message: string, duration: number) {
    this.snackBar.open(message, 'OK', {
      duration
    });
  }
}

import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // gelen hostu http ye cevir
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    return response.status(500).json(exception); //500 hatasını yazsın json seklinde./main ts e ekle
  }
}
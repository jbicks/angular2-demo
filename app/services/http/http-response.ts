export class HttpResponse<TContent> {
    status: number;
    message: string;
    content: TContent;
}

import { Content } from './content';
import { Replace } from '../../helpers/replace';
import { randomUUID } from 'crypto';

interface INotificationProps {
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}

export class Notification {
  private _id: string;
  private props: INotificationProps;

  constructor(props: Replace<INotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId() {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category() {
    return this.props.category;
  }

  public set readAt(readAt: Date) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.readAt;
  }
}

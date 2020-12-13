import { Document } from 'mongoose';
import IPublisher from 'src/domain/entities/IPublisher';

export default interface IPublisherSchema extends Document, IPublisher {}

import AuthorDTO from 'src/domain/dtos/AuthorDTO';
import CreateAuthorDTO from 'src/domain/dtos/CrateAuthorDTO';

import AuthorModel from '../infra/database/mongo/models/AuthorModel';
export default class AuthorService {
  async saveAuthor(author: CreateAuthorDTO): Promise<AuthorDTO> {
    try {
      const authorModel = new AuthorModel(author);
      await authorModel.save();
      const dto = new AuthorDTO('', author.name);
      return dto;
    } catch (error) {
      throw new Error('Erro ao criar autor');
    }
  }

  async updateAuthor(id: string, author: AuthorDTO): Promise<AuthorDTO> {
    try {
      const updatedAuthor = await new Promise<AuthorDTO>( (resolve, reject)=> AuthorModel
        .updateOne({ _id: id},
          {...author}, async (error) => {
            if(error)
              return reject(error)
            const result= await this.findById(id);
            resolve(new AuthorDTO(id, result.name))}));

      return new AuthorDTO(id, updatedAuthor.name);
    }catch(error) {
      console.log(error.message);
      throw new Error('Erro ao gravar author');
    }
  }

  async getAll(): Promise<AuthorDTO[]> {
    try {
      const authors = await AuthorModel.find();
      return authors;
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao listar autores');
    }
  }

  async findById(id: string) : Promise<AuthorDTO> {
    try {
      console.log(id,'buscando o author');
      const authorDocument = await AuthorModel.findOne({_id: id})

      if(!authorDocument) {
        throw new Error('Documento não encontrado');
      }

      return new AuthorDTO(authorDocument.id, authorDocument.name);
    }
    catch(error) {
      console.log(error);
      throw new Error(`Erro ao buscar author: ${id}: ${error.message}`);
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await  AuthorModel.deleteOne({_id: id})
    }
    catch(error) {
      console.log(error);
      throw new Error(`Erro ao delete author ${id}: ${error.message}`);
    }

    return true;
  }
}

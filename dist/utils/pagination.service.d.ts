import { PageOptionsDTO } from 'src/common/dto/page-option.dto';
import { PageDTO } from 'src/common/dto/page.dto';
export declare class PaginationService {
    constructor();
    withPage<T>(ships: T[], pageOption?: PageOptionsDTO): Promise<PageDTO<T>>;
}

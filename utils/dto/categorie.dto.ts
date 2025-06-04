export interface CategorieDto {
    id?: string;
    name?: string;
    description?: string;
    children: string[];
    active?: boolean;
}
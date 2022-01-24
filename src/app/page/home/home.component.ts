@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phrase: string = '';

  filterKey: string = '';

  constructor(
    private productService : ProductService,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
  }
  // A product tömb teljes tartalma
  listOfProducts: Product[] = this.productService.getAll();

  categoryDetails = this.categoryService.getAllCategoryName();

  probData = this.categoryService.getCategoryDetailes('Horror').description;

  //categoryDetails: String = this.categoryService.getCategoryDetailes('Horror').description;
  //categoryDetails_2 = this.categoryService.getCategoryDetailes('Horror').id;


  // A product tömb kategóriával szűrt tartalma. A szűrési változó a kategória neve.
  listOfCategorizedProducts: Product[] = this.productService.getCategorized('comedy');
  //listOfCategorizedProducts: Product[] = this.productService.getCategorized('comedy');

}
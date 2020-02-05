tipo trabajo pago 360
25/10/2018 9:30 inicio
25/10/2018 12:30 fin
25/10/2018 1:30 inicio
25/10/2018 4:10 fin

26/10/2018 8:30 inicio
26/10/2018 12:30 fin
26/10/2018 1:15 inicio
26/10/2018 2:40 fin

29/10/2018 8:30 inicio
29/10/2018 10:00 fin

INSERT INTO vt_users(id_user, code, ci, name, password, last_name_m, last_name_p, phone, email, birthdate, address, divice) 
			VALUES (1,'AKHS1','111111','user1','123','userM','userP','6815646','user1@gmail.com','2018-10-22 00:00:00','address','A');
INSERT INTO vt_users(id_user, code, ci, name, password, last_name_m, last_name_p, phone, email, birthdate, address, divice) 
			VALUES (2,'OSVA','2222222','user2','123','userM','userP','6815646','user2@gmail.com','2018-10-22 00:00:00','address','A');
INSERT INTO vt_users(id_user, code, ci, name, password, last_name_m, last_name_p, phone, email, birthdate, address, divice) 
			VALUES (3,'BNAWQ','333333','user3','123','userM','userP','6815646','user3@gmail.com','2018-10-22 00:00:00','address','A');
			


INSERT INTO vt_type_company(id_type_company, type, descripcion) VALUES (1,'ACT','Productos');
INSERT INTO vt_type_company(id_type_company, type, descripcion) VALUES (2,'ACT','Servicios');
INSERT INTO vt_type_company(id_type_company, type, descripcion) VALUES (3,'ACT','Productos y Servicios');



INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (1,'1111111','Pil','Pil','warnez','34568126','ACT',1);
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (2,'2222222','Nestle','Nestle','warnez','7561351','ACT',1);
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (3,'3333333','Sofia','Sofia','warnez','34568126','ACT',1);
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (4,'4444444','kris','kris','warnez','34568126','ACT',1);
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (5,'5555555','Famosa','Famosa','warnez','34568126','ACT',1);
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (6,'6666666','Lazzaronu','Lazzaronu','warnez','34568126','ACT',1);
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (7,'7777777','Coca cola','Coca cola','warnez','34568126','ACT',1);	
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (8,'8888888','Mendocina','Mendocina','warnez','34568126','ACT',1);	
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (9,'9999999','Ariel','Ariel','warnez','34568126','ACT',1);	
INSERT INTO vt_company(id_company, nit, name, razon_social, address, phone, state, id_type_company) 
			   VALUES (10,'111100','Ace','Ace','warnez','34568126','ACT',1);	

			     
			   
INSERT INTO vt_categories(id_category, name, url_image, state) VALUES (1,'BEBIDAS','/image/categories/fund_bebidas.jpg','ACT');
INSERT INTO vt_categories(id_category, name, url_image, state) VALUES (2,'SNACKS','/image/categories/found_snack_bar.jpg','ACT');
INSERT INTO vt_categories(id_category, name, url_image, state) VALUES (3,'DETERGENTES','/image/categories/fund_detergentes.jpg','ACT');
INSERT INTO vt_categories(id_category, name, url_image, state) VALUES (4,'DESPENSA','/image/categories/fund_despensa.jpg','ACT');
			   
			   
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (1,'123','Lateos','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (2,'123','Jugos','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (3,'123','Yogurt','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (4,'123','Cafe','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (5,'123','Carnes','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (6,'123','Cereal','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (7,'123','Fideos','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (8,'123','Salsas','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (9,'123','Sodas','ACT');
INSERT INTO vt_type_products(id_type_product, code, name, state) VALUES (10,'123','Detergente','ACT');
			   
			   
		
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (1, 1, 'ACT');	
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (1, 2, 'ACT');		
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (2, 4, 'ACT');	
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (3, 4, 'ACT');	
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (4, 2, 'ACT');	
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (5, 4, 'ACT');
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (6, 4, 'ACT');
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (7, 1, 'ACT');
INSERT INTO vt_company_cotegories(id_company, id_category, state) VALUES (9, 3, 'ACT');


INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(1, '123456', 'Leche pil 1Lt', 'Lacteo', '8.5000', 500, '/image/products/1/leche_pil_1lt.jpg', 'ACT', 1, 1, 1);
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)     
				VALUES(2, '567519', 'Pilfrut', 'Jugo', '1.0000', 2000, '/image/products/1/pilfrut.jpg', 'ACT', 1, 1, 2);
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(3, '786189', 'Yogurt', 'Yogurt', '5.0000', 5350, '/image/products/1/yogurt.jpg', 'ACT', 1, 1, 3); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(4, '578933', 'Jugo de Mazana', 'Jugo', '7.5000', 5350, '/image/products/1/jugo_de_mazana.jpg', 'ACT', 1, 1, 2); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(5, '578933', 'Jugo de Naranja', 'Jugo', '7.5000', 5350, '/image/products/1/jugo_de_naranja.jpg', 'ACT', 1, 1, 2); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(6, '578933', 'Jugo de Durazno', 'Jugo', '7.5000', 5350, '/image/products/1/jugo_de_durazno.jpg', 'ACT', 1, 1, 2); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(7, '156482', 'Leche Condensada', 'Lacteo', '3.5000', 1200, '/image/products/1/leche_condensada.png', 'ACT', 1, 2, 1);
				
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)
				VALUES(9, '789641', 'Nido', 'Lacteo', '8.5000', 500, '/image/products/2/nido.jpg', 'ACT', 2, 4, 1); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(10, '3547596', 'Nescafe tradicional', 'cafe', '20.5000', 500, '/image/products/2/nescafe_tradicion_400_gramos.jpg', 'ACT', 2, 4, 4); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(11, '255163', 'Nescafe clasico', 'cafe', '21.5000', 500, '/image/products/2/cafe_clasico.jpg', 'ACT', 2, 4, 4); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(12, '7561658', 'Nesquik', 'Lacteo', '8.5000', 500, '/image/products/2/nesquik.jpg', 'ACT', 2, 4, 1); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(13, '983575', 'cerelac', 'cereal', '8.5000', 500, '/image/products/2/cerelac.jpg', 'ACT', 2, 4, 6); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(14, '7561658', 'nido en polvo', 'Lacteo', '8.5000', 500, '/image/products/2/nido_en_polvo.jpg', 'ACT', 2, 4, 1); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(15, '7561658', 'Nesquik chocolate', 'Lacteo', '15.5000', 500, '/image/products/2/nesquik_chocolate.jpg', 'ACT', 2, 4, 1); 
				
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(16, '7561658', 'yo chef milaneza', 'carne', '45.5000', 500, '/image/products/3/Milanesa_de_Pollo.png', 'ACT', 3, 4, 5); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(17, '675653', 'pollo entero', 'carne', '23.5000', 500, '/image/products/3/Pollo_Relleno.png', 'ACT', 3, 4, 5); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(18, '745961', 'pollo 1k piernas', 'carne', '18.5000', 500, '/image/products/3/Pierna_Pollo.png', 'ACT', 3, 4, 5); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(19, '13498', 'pollo 1k pecho', 'carne', '18.5000', 500, '/image/products/3/Pechuga_pollo.png', 'ACT', 3, 4, 5); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(20, '92981', 'pollo 1k ala', 'carne', '18.5000', 500, '/image/products/3/alas_de_pollo.jpg', 'ACT', 3, 4, 5); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(21, '135498', 'chorizos parrileros', 'carne', '18.5000', 500, '/image/products/3/Chorizo_Parrillero.png', 'ACT', 3, 4, 5); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(22, '567845', 'chorizos picante', 'carne', '13.5000', 500, '/image/products/3/Chorizo_Picante.png', 'ACT', 3, 4, 5); 
				
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(23, '578916', 'lata de durazno', 'jugo', '10.8000', 500, '/image/products/4/durazno_en_lata.png', 'ACT', 4, 2, 2); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(24, '751463', 'mayoneza', 'salsa', '3.9900', 500, '/image/products/4/mayonesa-kris-pomo-380gr.jpg', 'ACT', 4, 2, 8); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(25, '256751', 'ketchup', 'salsa', '3.5000', 500, '/image/products/4/ketchup-kris-pomo-410gr.jpg', 'ACT', 4, 2, 8); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(26, '648167', 'mostaza', 'salsa', '3.7000', 500, '/image/products/4/mostaza-kris-pomo-380gr.png', 'ACT', 4, 2, 8); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(27, '945216', 'Frutaritos', 'cereal', '13.5000', 500, '/image/products/4/Frutaritos.PNG', 'ACT', 4, 2, 6); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)
				VALUES(28, '3488971', 'chockgol', 'cereal', '13.5000', 500, '/image/products/4/chockgol.PNG', 'ACT', 4, 2, 6); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)
				VALUES(29, '123489', 'azucaritas', 'cereal', '13.5000', 500, '/image/products/4/azucaritas.PNG', 'ACT', 4, 2, 6);
				
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)
				VALUES(30, '845163', 'tallarin', 'fideos', '5.0000', 500, '/image/products/5/Fideos-famosa-largos.jpg', 'ACT', 5, 4, 7);
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)
				VALUES(31, '245948', 'corbata', 'fideos', '5.0000', 500, '/image/products/5/fideos-corbata.jpg', 'ACT', 5, 4, 7); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(32, '34258', 'macarron', 'fideos', '5.0000', 500, '/image/products/5/fideos-macarron.jpg', 'ACT', 5, 4, 7); 
				
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(33, '358716', 'tallarin', 'fideos', '5.0000', 500, '/image/products/6/tallarin.jpg', 'ACT', 6, 4, 7); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(34, '93618', 'corbata', 'fideos', '5.0000', 500, '/image/products/6/corbata.jpg', 'ACT', 6, 4, 7); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(35, '147518', 'macarron', 'fideos', '5.0000', 500, '/image/products/6/macarron.jpg', 'ACT', 6, 4, 7); 
				
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(36, '785198', 'coca cola 1Lt', 'sodas', '6.0000', 500, '/image/products/7/coca-cola-1lt.jpg', 'ACT', 7, 1, 9);
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(37, '785198', 'coca cola 2Lt', 'sodas', '10.0000', 500, '/image/products/7/coca-cola-2lt.jpg', 'ACT', 7, 1, 9); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(38, '785198', 'coca cola 2Lt retronable', 'sodas', '8.0000', 500, '/image/products/7/coca-cola-2lt-retornable.jpg', 'ACT', 7, 1, 9); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(39, '785198', 'coca cola 3Lt', 'sodas', '12.0000', 500, '/image/products/7/coca-cola-3Lt.jpg', 'ACT', 7, 1, 9); 
				
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)  
				VALUES(40, '785198', 'ace OMO 3k', 'Detergente', '22.0000', 500, '/image/products/9/ace-omo-3k.jpg', 'ACT', 9, 3, 9); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(41, '785198', 'ace OMO 450g', 'Detergente', '7.0000', 500, '/image/products/9/ace-omo-450g.jpg', 'ACT', 9, 3, 9); 
INSERT INTO vt_products(id_product, code, name, type, precio, stop, url_image, state, id_company, id_category, id_type_product)   
				VALUES(42, '785198', 'ace Matic Liquido 3Lt', 'Detergente', '23.0000', 500, '/image/products/9/ace-matic-Liquido-3Lt.jpg', 'ACT', 9, 3, 9);					
				
				
				
				
				
				
			
			
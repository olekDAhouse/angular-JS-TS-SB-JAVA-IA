package com.bolsadeideas.springboot.di.app;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.bolsadeideas.springboot.di.app.models.domain.ItemFactura;
import com.bolsadeideas.springboot.di.app.models.domain.Producto;
import com.bolsadeideas.springboot.di.app.models.services.IServicio;
import com.bolsadeideas.springboot.di.app.models.services.MiServicio;

@Configuration
public class AppConfig {

	@Bean("miServiciosSimple")
	@Primary
	public IServicio registrarMiServicio() {
		return new MiServicio();
	}
	@Bean("miServiciosComplejo")
	public IServicio registrarMiServicioComplejo() {
		return new MiServicio();
	}
	
	@Bean("itemsFactura")
	public List<ItemFactura> registrarItems(){
		Producto producto1 = new Producto("Camara Sony", 100);
		Producto producto2 = new Producto("Auriculares AirPod", 200);
		Producto producto3 = new Producto("mONITOR Sony", 4000);
		Producto producto4 = new Producto("COCAINA", 250);
		
		ItemFactura linea1 = new ItemFactura(producto1, 2);
		ItemFactura linea2 = new ItemFactura(producto2, 1);
		ItemFactura linea3 = new ItemFactura(producto3, 1);
		ItemFactura linea4 = new ItemFactura(producto4, 1);
		
		return Arrays.asList(linea1,linea2,linea3);
	}
	@Bean("itemsOficinaFactura")
	public List<ItemFactura> registrarOficinaItems(){
		Producto producto1 = new Producto("Camara Sony", 100);
		Producto producto2 = new Producto("Auriculares AirPod", 200);
		Producto producto3 = new Producto("mONITOR Sony", 4000);
		Producto producto4 = new Producto("COCAINA", 250);
		
		ItemFactura linea1 = new ItemFactura(producto1, 2);
		ItemFactura linea2 = new ItemFactura(producto2, 1);
		ItemFactura linea3 = new ItemFactura(producto3, 1);
		ItemFactura linea4 = new ItemFactura(producto4, 1);
		
		return Arrays.asList(linea1,linea2,linea3,linea4);
	}
}

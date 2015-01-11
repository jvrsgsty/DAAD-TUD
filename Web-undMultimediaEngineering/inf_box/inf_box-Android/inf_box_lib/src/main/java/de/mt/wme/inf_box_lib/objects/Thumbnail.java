package de.mt.wme.inf_box_lib.objects;

import org.simpleframework.xml.Default;

/**
 * Represents a single Thumbnail, always bound to a (@link Item)
 * 
 * @author antaug
 *
 */
@Default
public class Thumbnail {

	private String filename;

	public Thumbnail() {

	}

	/**
	 * @return the filename
	 */
	public String getFilename() {
		return filename;
	}

	/**
	 * @param filename the filename to set
	 */
	public void setFilename(String filename) {
		this.filename = filename;
	}



}

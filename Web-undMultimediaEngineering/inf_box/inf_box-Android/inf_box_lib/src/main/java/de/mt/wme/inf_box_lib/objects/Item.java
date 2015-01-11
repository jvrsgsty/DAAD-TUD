
package de.mt.wme.inf_box_lib.objects;

import org.simpleframework.xml.Element;
import org.simpleframework.xml.Root;

/**
 * Represents a single inf_box-Item
 * 
 * @author antaug
 */
@Root
public class Item {
    @Element
    private int id;

    @Element
    private String filename;

    @Element
    private String file_url;

    @Element(required = false)
    private Metadata metadata;

    public Item() {
    }

    public Item(String filename, String file_url) {

        this.setFilename(filename);
        this.setFile_url(file_url);

    }

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
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

    /**
     * @return the file_url
     */
    public String getFile_url() {
        return file_url;
    }

    /**
     * @param file_url the file_url to set
     */
    public void setFile_url(String file_url) {
        this.file_url = file_url;
    }

    /**
     * @return the metadata
     */
    public Metadata getMetadata() {
        return metadata;
    }

    /**
     * @param metadata the metadata to set
     */
    public void setMetadata(Metadata metadata) {
        this.metadata = metadata;
    }

}
